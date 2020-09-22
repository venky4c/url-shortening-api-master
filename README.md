# url-shortening-api-master
[LIVE PROJECT LINK](https://practical-mcclintock-c961cd.netlify.app/)
> Integrates with the rel.ink URL shortening API and lets you play with browser storage in this landing page project.


![Alt Link](https://github.com/venky4c/url-shortening-api-master/blob/master/dist/src/url-shorten.gif)

URL: https://practical-mcclintock-c961cd.netlify.app/

- We need to persist the user entered url's even after the browser refresh. So we are utilizing the same [urlList](https://github.com/venky4c/url-shortening-api-master/blob/master/dist/src/components/ShortenList.js) object which is a key value pair of the urlForShortening(key) and the resultant tinyUrl(value) 
- Browser retains state after refresh. This feature uses [localStorage](https://github.com/venky4c/url-shortening-api-master/blob/master/dist/src/components/ShortenList.js) functionality inherently available with all browsers.
- *useState, useEffect* hooks were used for state management.


Thanks to Robin Wieruch for his wonderful article on implementing local storage 
https://www.robinwieruch.de/local-storage-react
