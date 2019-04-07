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

export function getComments (id) {
  return fetch(`${server}/posts/${id}/comments`,{ 
    method: 'get',
    headers: {
      ...headers,
    }
  })
    .then(comments => comments.json())
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

export function updatePost (id, params) {
  return fetch(`${server}/posts/${id}`,{ 
    method: 'put',
    headers: {
      ...headers,
    },
    body: JSON.stringify(params)
  })
  .then(res => res.json())
  .then(data => data)
}


export function setCommentVote (option) {
  console.log("voteapi" + option.vote)
  return fetch(`${server}/comments/${option.id}`,{ 
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify({option : option.vote})
  })
    .then(comment => comment.json())
}


export function deleteComment (id) {
  return fetch(`${server}/comments/${id}`,{ 
    method: 'delete',
    headers: {
      ...headers,
    }
  })
    .then(comments => comments.json())
}


export function saveComment (comment) {
  return fetch(`${server}/comments`,{ 
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

export function updateComment (id, comment) {
  return fetch(`${server}/comments/${id}`,{ 
    method: 'put',
    headers: {
      ...headers,
    },
    body: JSON.stringify(comment)
  })
  .then(res => res.json())
}

/* 

        PUT /comments/:id
      USAGE:
        Edit the details of an existing comment

      PARAMS:
        timestamp: timestamp. Get this however you want.
        body: String
 */
