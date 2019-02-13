# automate
This repository contains all the programs and scripts I use to automate my life using an old macbook without a keyboard as a personal web server. <br />
All configurations files that may contains private data are replaced with ```.example``` : you need to copy them, stripping the ```.example``` and changing the values of parameters inside, according to your needs.

## /applescripts
contains the applescripts used to communicate with my server using iMessages. <br />
<br />
In order to use the handler, your os x version should be El Capitan or under (newer versions not supported), and you need to put the script in ```~/Library/Application Scripts/Com.apple.iChat``` and choose it in your iMessages settings as ```AppleScript Handler```

## /downloader
contains a lightweight version of my [sliderdownloader_js](https://github.com/thentges/sliderdownloader_js) project, with little tweaks to make it work with the others applications/scripts of this repo.

## /api
contains a flask API used to trigger different actions depending on the route called.
