const server = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'application/json'
}

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

export function setPostVote (option) {
  console.log("voteapi" + option.vote)
  return fetch(`${server}/posts/${option.id}`,{ 
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify({option : option.vote})
  })
    .then(res => res.json())
}

export function savePost (post) {
  myInitPost = {...myInitPost, body: JSON.stringify(post)};
  return fetch(`${server}/posts`,{ 
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .then(data => data)
}

export function getPostsFromCategory (categorie) {
  return fetch(`${server}/${categorie}/posts`,myInit)
    .then(posts => posts.json())
}

