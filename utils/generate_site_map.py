import os

ROOT_ENDPOINT = 'https://mrkandreev.name/'
ROOT_DIR = os.path.join(os.path.dirname(__file__), '../')
SNIPPETS_DIR = os.path.join(ROOT_DIR, 'snippets')
BLOGS_DIR = os.path.join(ROOT_DIR, 'blog')


def list_inner(directory):
    return [
        ROOT_ENDPOINT + os.path.join(directory, name)[len(ROOT_DIR):]
        for name in os.listdir(directory)
    ]


def main():
    endpoints = list_inner(BLOGS_DIR) + list_inner(SNIPPETS_DIR)
    output = '\n'.join([
        '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '\n'.join([
            f'<url><loc>{endpoint}</loc></url>'
            for endpoint in endpoints
        ]),
        '</urlset>'
    ])
    with open(os.path.join(ROOT_DIR, 'sitemap.xml'), 'w') as f:
        f.write(output)


if __name__ == '__main__':
    main()
