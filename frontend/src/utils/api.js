const server = 'http://localhost:3001'

var myHeaders = new Headers({Authorization : 'EnioAbrantes'});

var myInit = { method: 'GET',
               headers: myHeaders};

export function getCategories () {
    return fetch(`http://localhost:3001/categories`,myInit)
      .then(data => data.json())
  }