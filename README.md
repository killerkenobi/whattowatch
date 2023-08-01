# Welcome to whattowatch
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This site selects a random show or movie from a list and displays it on the webpage. This is a very simple HTML site that was made out of necessity as neither myself nor my friends ever know what to watch.

This site is hosted using GitHub Pages. You can check it out at [killerkenobi.github.io/whattowatch](https://killerkenobi.github.io/whattowatch/)

The list of movies and shows can be found in [content.txt](killerkenobi/whattowatch/content.txt). This static file is served to my site using Statically's free CDN tool via the [following link](https://cdn.statically.io/gh/killerkenobi/whattowatch/TAG/content.txt). Change the TAG variable to one of the [repos tags](https://github.com/killerkenobi/whattowatch/tags) available tags to view previous versions of the list. This allows a single list of content to be verioned and maintained rather than hardcoding it in the js code.

## CDN Info
The size limit for a file served by Statically is 30MB and set on the request per individual file. So a single HTTP request can't go above 30MB or else the "413 Payload Too Large" error will appear. This restriction should be okay for this application as I am only delivering a simple text file.

All files are cached on Statically for 1 year, except for the following branches which are cached for only 1 day:

    main
    master
    dev
    develop
    gh-pages

So, if you are using Statically in a production environment (like I am here), I suggest you tag your main branch and include that tag in the CDN request URL like so: https://cdn.statically.io/gh/killerkenobi/whattowatch/v1.0.1/content.txt

This will help avoid the one day cacheing delay when referencing the main branch which was too long for my liking.

---
## Whats Next?
I would also like to add some additional functionality to this site. When a user is presented with a random selection, I would like to also display information about the show or movie including viewing platform, ratings, descriptions, etc.

---
## Personal Use of This Site's Code
Feel free to fork this repo for your own personal use. To update the list of movies you will need to change the username, repo, and tag in the fileURL definition in the [content_randomizer.js](killerkenobi/whattowatch/js/content_randomizer.js) code to your own values. Then you can edit the [content.txt](killerkenobi/whattowatch/content.txt) file and add serve your own items to your forked site.

---
## Acknowledgements
The background of this site is called Warpspeed and can be found at the [Warpspeed GitHub repo](https://github.com/adolfintel/warpspeed/tree/master).
There is a great [editor](https://fdossena.com/?p=warpspeed/i.frag) available that allows you to customize elements of the Warpspeed background. The code for the editor can be found at the Warpspeed GitHub link shared above.

The font used for this site is called 8Bit Wonder and can be found at [CDN Fonts](https://www.cdnfonts.com/8bit-wonder.font).

The "Suprise Me" button was discoved after viewing some examples of [responsive buttons with a few lines of CSS](https://fdossena.com/?p=html5cool/buttons/i.frag).

The static file content.txt is served to my site using [Statically's CDN](https://statically.io/) via the [following link](https://cdn.statically.io/gh/killerkenobi/whattowatch/TAG/content.txt)