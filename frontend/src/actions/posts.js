import { setPostVote, getPostsFromCategory, savePost } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const VOTE_POSTS = 'VOTE_POSTS'
export const RECEIVE_POSTS_CATEGORIES = 'RECEIVE_POSTS_CATEGORIES'
export const ADD_POST = 'ADD_POST'

export function receivePosts (posts){
    return {
        type : RECEIVE_POSTS,
        posts,
    }
}

function postVote ({ id, vote}) {
    return {
      type: VOTE_POSTS,
      id,
      vote,
    }
  }
  
export function handlePostVote (info) {
    return (dispatch) => {
        dispatch(postVote(info))

        return setPostVote(info)
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
        id : '2232',
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