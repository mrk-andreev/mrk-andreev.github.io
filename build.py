import json
import os
import sys
from csscompressor import compress as compress_css
from mako.lookup import TemplateLookup
from mako.template import Template

os.chdir(sys.path[0])


def minify_html(html):
    return html.replace("\n", "")


'''
    minimize styles
'''

styles_data = ''

with open('assets/custom.css') as owncss_file:
    styles_data += reduce(lambda x, y: x + y, owncss_file.readlines())

with open('assets/kube.css') as kubecss_file:
    styles_data += reduce(lambda x, y: x + y, kubecss_file.readlines())

styles_data = compress_css(styles_data)

with open('assets/styles.min.css', 'w') as output_cssfile:
    output_cssfile.write(styles_data)

'''
    generate main page
'''

with open('resume.json') as data_file:
    data = json.load(data_file)

template = Template(filename='index.template.html', lookup=TemplateLookup(directories=['./assets/blocks/']),
                    output_encoding='utf-8')
page_rendered = template.render(**data)
page_rendered = minify_html(str(page_rendered))

with open('index.html', 'w') as output_file:
    output_file.write(page_rendered)
