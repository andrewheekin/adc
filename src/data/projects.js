export default (
  {
    bustacache: [
      ['h1', 'Bust a cache'],
      ['p', `To make broswing more efficient and quicker, most browsers will cache familiar external
      resources like images, css, etc. But when an external script changes to 
      deliver new functionality or content to a website, there's a risk the script has been 
      cached and the browser will default to the old version. To prevent caching, add a query string of choice (the current 
      UTC timestamp works fine) to the end of the file name to trigger the browser's caching mechanism 
      into thinking a new resource is present.`],
      ['p', 'Example:'],
      ['code', 
`(function (m, o, c, h, i){
  h = m.createElement(o);
  i = m.getElementsByTagName(o)[0];
  h.src = c + '?v=' + (new Date().getTime());
  i.parentNode.insertBefore(h, i);
})(document, 'script', 'https://cdn.com/path/script.js');`],
    ],
    thiswebsite: [
      ['h1', `This website`],
      ['p', `The site is hosted with AWS S3 static hosting. The view is generated with react.js and
              webpack bundles all javascript. React-router provides simple
              routing functionality for the site. With the bundled javascript from webpack, updating the 
              site is as simple as uploading the new index.html, style, bundle.js, and img folder to the
              bucket.`],
      ['a', `https://github.com/andrewheekin/andrewdotcom`, 'https://github.com/andrewheekin/andrewdotcom'],
    ],
    paytherent: [
      ['h1', 'Pay the rent'],
      ['p', `The pay-the-rent application collects monthly rent through venmo's api.
            The AP Scheduler package runs the payment cron jobs, the python requests package posts
            charges. BeautifulSoup parses the headers of the Venmo login page.
            The config.json file sets the charge amount, venmo usernames to charge, frequency, and time
            window.`],
      ['a', 'https://github.com/andrewheekin/pay-the-rent', 'https://github.com/andrewheekin/pay-the-rent'],
    ],
    mochibox: [
      ['h1', 'Mochibox'],
      ['p', `Over half of restaurant patrons will visit the restaurant's website before visiting, according
            to the National Restuarant Association. Mochibox was created to draw web visitors into the restaurant
            by capturing emails and social engagement in exchange for specials.`],
      ['p', `Homepage:`],
      ['a', 'https://mochibox.io', 'https://mochibox.io'],
      ['p', 'Email:'],
      ['a', 'mailto:andrew@mochibox.io', 'andrew@mochibox.io'],
    ],
    flaskmetatag: [
      ['h1', 'Flask metatag'],
      ['p', `Python flask api that uses the python newspaper package to output
      the open graph information (title, description, images) of a website.`],
      ['p', 'Github repo:'],
      ['a', 'https://github.com/andrewheekin/flask-metatag', 'https://github.com/andrewheekin/flask-metatag'],
    ],
    dadjokebot: [
      ['h1', 'Dadjokebot'],
      ['p', `This project is a python flask application using the twilio package.
      I added a landing page as a link in the response
      sms to collect analytics data. The landing page is a static site that makes cross-origin calls to an external
      resource. The client is statically hosted on S3 by cloudfront.
      The server is hosted on DigitalOcean. Docker-compose rebuilds the 
      flask app container. Dockerized postgres and a
      separate postgres data container persist data on who texts the app. Redis keeps track of jokes told to 
      avoid telling the same joke twice. SSL certs are set up on both the
      server ip and the S3 domain. Nginx acts as a reverse proxy.`],
      ['a', 'https://dadjokebot.com', 'https://dadjokebot.com'],
      ['a', 'https://github.com/andrewheekin/dadjoke-frontend', 'https://github.com/andrewheekin/dadjoke-frontend'],
      ['a', 'https://github.com/andrewheekin/dadjoke', 'https://github.com/andrewheekin/dadjoke'],
    ]
  }
)