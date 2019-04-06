import { setPostVote, getPostsFromCategory, savePost, deletePost, updatePost, getComments, deleteComment, setCommentVote } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { uuidv4 } from '../utils/IDGenerator'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const VOTE_POSTS = 'VOTE_POSTS'
export const RECEIVE_POSTS_CATEGORIES = 'RECEIVE_POSTS_CATEGORIES'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ORDER_POST = 'ORDER_POST'
export const COMMENTS_POST = 'COMMENTS_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function receivePosts (posts){
    return {
        type : RECEIVE_POSTS,
        posts,
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
        console.log("info" + info.id)
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
            console.log("newpost"+ post.voteScore)
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
            console.log("newpost"+ post)
            dispatch(removePost(post.id))
        })
        .then(() => dispatch(hideLoading()))
    }
  }

  function removeComment (id) {
    return {
      type: REMOVE_COMMENT,
      id,
    }
  }

  export function handleDeleteComment (id) {
    return (dispatch) => {
    
      return deleteComment(
        id
      )
        .then((post) => {
            dispatch(removeComment(post.id))
        })
    }
  }


  function ShowComments (comments) {
    return {
      type: COMMENTS_POST,
      comments,
    }
  }

  export function handleShowComments (id) {
    return (dispatch) => {
      return getComments(
        id
      )
        .then((comments) => {
            console.log('commmmmmets' + comments)
            dispatch(ShowComments(comments))
        })
    }
  }


  function commentVote (comment) {
    return {
      type: VOTE_COMMENT,
      comment,
    }
  }
  
  export function handleCommentVote (info) {
      return (dispatch) => {
          dispatch(commentVote(info))
          console.log("info" + info.id)
          return setCommentVote(info)
          .then((comment) => dispatch(commentVote(comment)))
          .catch((e) => {
              console.warn('Error in handleCommentVote: ', e)
              dispatch(commentVote(info))
              alert('The was an error liking or disliking a post. Try again.')
          })
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