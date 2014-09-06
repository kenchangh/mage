#! /usr/bin/env python
# -*- coding: utf-8 -*-
"""
    test.download_manga
    ~~~~~~~~~~~~~~~~~~~

    This module is used to download manga images from one chapter of Naruto.
"""

from os import path
from urllib2 import urlopen


url = 'http://z.mfcdn.net/store/manga/8/TBD-691.0/compressed/h0{}.jpg'
download_dir = path.join(path.dirname(__file__), 'static', 'manga')
page_number = 1
while True:
    try:
        if page_number < 10:
            page_number = '0' + str(page_number)
        page = urlopen(url.format(page_number)).read()
        
        page_file = '{}.jpg'.format(page_number)
        with open(path.join(download_dir, page_file), 'wb') as f:
            f.write(page)
        print 'Download {} page'.format(page_number)
        page_number = int(page_number) + 1
    except:
        break
