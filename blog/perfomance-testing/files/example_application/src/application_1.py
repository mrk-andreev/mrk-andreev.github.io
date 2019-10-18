import os

import tornado.httpserver
import tornado.ioloop
import tornado.web
from sqlalchemy import BigInteger
from sqlalchemy import Column
from sqlalchemy import String
from tornado_sqlalchemy import as_future
from tornado_sqlalchemy import declarative_base
from tornado_sqlalchemy import make_session_factory
from tornado_sqlalchemy import SessionMixin

DB_CONNECTION = os.environ.get('DB_CONNECTION', 'postgres://postgres:postgres@localhost:5430/postgres')
ITEM_NAME_MAX_SIZE = 255

DeclarativeBase = declarative_base()


class Item(DeclarativeBase):
    __tablename__ = 'items'

    id = Column(BigInteger, primary_key=True)
    name = Column(String(ITEM_NAME_MAX_SIZE), unique=True)


class ItemsHandler(SessionMixin, tornado.web.RequestHandler):
    async def get(self):
        with self.make_session() as session:
            count = await as_future(session.query(Item).count)
            self.write({
                'count': count
            })


def make_app():
    handlers = [
        (r'/items', ItemsHandler),
    ]
    return tornado.web.Application(
        handlers,
        session_factory=make_session_factory(DB_CONNECTION)
    )


def main():
    app = make_app()
    server = tornado.httpserver.HTTPServer(app)
    server.bind(8888)
    server.start(0)  # forks one process per cpu
    tornado.ioloop.IOLoop.current().start()


if __name__ == '__main__':
    main()
