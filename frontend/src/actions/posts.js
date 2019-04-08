import { setPostVote, getPostsFromCategory, savePost, deletePost, updatePost, getSpecificPost } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { uuidv4 } from '../utils/IDGenerator'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const VOTE_POSTS = 'VOTE_POSTS'
export const RECEIVE_POSTS_CATEGORIES = 'RECEIVE_POSTS_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ORDER_POST = 'ORDER_POST'
export const RECEIVE_SPECIFIC_POST = 'RECEIVE_SPECIFIC_POST'


export function receivePosts (posts){
    return {
        type : RECEIVE_POSTS,
        posts,
    }
}

function receivePost (post) {
  return {
    type: RECEIVE_SPECIFIC_POST,
    post,
  }
}

export function handleReceivePost (id) {
  return (dispatch) => {
      return getSpecificPost(id)
      .then((post) => dispatch(receivePost(post)))
      .catch((e) => {
          console.warn('Error in handleReceivePost: ', e)
          alert('Try again later.')
      })
  }
}

function postVote (post) {
    return {
      type: VOTE_POSTS,
      post,
    }
  }
  
export function handlePostVote (info) {
    return (dispatch) => {
        dispatch(postVote(info))
        return setPostVote(info)
        .then((post) => dispatch(postVote(post)))
        .catch((e) => {
            console.warn('Error in handlePostVote: ', e)
            dispatch(postVote(info))
            alert('The was an error liking or disliking a post. Try again.')
        })
    }
}


function postsFromCategory (postsPerCategory){
    return {
        type : RECEIVE_POSTS_CATEGORIES,
        postsPerCategory,
    }
}

export function handlePostsFromCategory (category) {
    return (dispatch) => {

        return getPostsFromCategory(category)
            .then(( postsPerCategory ) => {
                dispatch(postsFromCategory(postsPerCategory))
            })
            .catch((e) => {
                console.warn('Error in handlePostsFromCategory: ', e)
                dispatch(postsFromCategory(category))
                alert('The was an error liking the tweet. Try again.')
            })
    }
  }
  

  function addPost (post) {
    return {
      type: ADD_POST,
      post,
    }
  }

  export function handleAddPost (title, body, author, category) {
    return (dispatch) => {
    
      dispatch(showLoading())

      return savePost({
        id : uuidv4(),
        timestamp : Date.now(),
        title,
        body,
        author,
        category
      })
        .then((post) => {
            dispatch(addPost(post))
        })
        .then(() => dispatch(hideLoading()))
    }
  }

  function editPost (post) {
    return {
      type: EDIT_POST,
      post,
    }
  }
  
  export function handleEditPost (id, title, body) {
    return (dispatch) => {

      return updatePost(id, {
        title,
        body
      })
        .then((post) => {
            dispatch(editPost(post))
        })
    }
  }

  function removePost (id) {
    return {
      type: REMOVE_POST,
      id,
    }
  }

  export function handleDeletePost (id) {
    return (dispatch) => {
    
      dispatch(showLoading())
      return deletePost(
        id
      )
        .then((post) => {
            dispatch(removePost(post.id))
        })
        .then(() => dispatch(hideLoading()))
    }
  }


  function orderPosts (posts) {
    return {
      type: ORDER_POST,
      posts,
    }
  }

  export function handleOrderPosts (posts) {
    return (dispatch) => {
      return dispatch(orderPosts(posts))
    }
  }
  
/* 

        PUT /comments/:id
      USAGE:
        Edit the details of an existing comment

      PARAMS:
        timestamp: timestamp. Get this however you want.
        body: String
 */
