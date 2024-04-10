import os

root = os.path.dirname(__file__)


def main():
    for dirname in [
        os.path.join(root, 'blog'),
        os.path.join(root, 'snippets'),
    ]:
        dirs = os.listdir(dirname)
        for d in dirs:
            fp = os.path.join(dirname, d)
            if os.path.isdir(fp):
                print(fp[len(root):])


if __name__ == '__main__':
    main()
