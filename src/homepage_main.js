fetch(`https://wovenly-server.herokuapp.com/gethomepagedata`, {
    method: 'GET'
  })
  .then(function(response) {
    return response.json()
  })
  .then(function(json) {
    console.log(json);
    setLocalStorageObjectItem('homepageData', json)
  })
  .catch(error => error);


function setLocalStorageObjectItem(key, value) {
  if (value === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}