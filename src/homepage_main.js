import {setLocalStorageObjectItem} from './localStorageTools.js';

fetch(`https://wovenly-server.herokuapp.com/gethomepagedata`, {
    method: 'GET'
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    setLocalStorageObjectItem('homepageData', json)
  })
  .catch(error => error);