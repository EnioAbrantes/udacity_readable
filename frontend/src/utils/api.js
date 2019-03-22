const server = 'http://localhost:3001'

var myHeaders = new Headers({Authorization : 'EnioAbrantes'});

var myInit = { method: 'GET',
               headers: myHeaders};

export function getCategories () {
    return fetch(`${server}/categories`,myInit)
      .then(categories => categories.json())
}

export function getPosts () {
  return fetch(`${server}/posts`,myInit)
    .then(posts => posts.json())
}

