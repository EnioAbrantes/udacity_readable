const server = 'http://localhost:3001'

var myHeaders = new Headers({Authorization : 'EnioAbrantes'});

var myInit = { method: 'GET',
               headers: myHeaders};

var myInitPost = { method: 'POST',
               headers: myHeaders};

export function getCategories () {
    return fetch(`${server}/categories`,myInit)
      .then(categories => categories.json())
}

export function getPosts () {
  return fetch(`${server}/posts`,myInit)
    .then(posts => posts.json())
}

export function setPostVote (vote) {
  return fetch(`${server}/posts/${vote}`,myInitPost)
    .then(posts => posts.json())
}

export function getPostsFromCategory (categorie) {
  return fetch(`${server}/${categorie}/posts`,myInit)
    .then(posts => posts.json())
}
