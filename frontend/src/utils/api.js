const server = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'application/json'
}

export function getCategories () {
    return fetch(`${server}/categories`,{ 
      method: 'get',
      headers: {
        ...headers,
      }
    })
      .then(categories => categories.json())
}

export function getPosts () {
  return fetch(`${server}/posts`,{ 
    method: 'get',
    headers: {
      ...headers,
    }
  })
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
  return fetch(`${server}/${categorie}/posts`,{ 
    method: 'get',
    headers: {
      ...headers,
    }
  })
    .then(posts => posts.json())
}

export function deletePost (id) {
  return fetch(`${server}/posts/${id}`,{ 
    method: 'delete',
    headers: {
      ...headers,
    }
  })
    .then(posts => posts.json())
    .then(data => data)
}

