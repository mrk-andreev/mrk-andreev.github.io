import os

root = os.path.dirname(__file__)


def main():
    out = set()
    for dirname in [
        os.path.join(root, 'blog'),
        os.path.join(root, 'snippets'),
    ]:
        dirs = os.listdir(dirname)
        for d in dirs:
            fp = os.path.join(dirname, d)
            if os.path.isdir(fp):
                out.add(fp[len(root):])
    print(out)


if __name__ == '__main__':
    main()
