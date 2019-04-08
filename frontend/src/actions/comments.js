import { uuidv4 } from '../utils/IDGenerator'
import { getComments, deleteComment, setCommentVote, saveComment, updateComment } from '../utils/api'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const COMMENTS_POST = 'COMMENTS_POST'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function receiveComments (comments){
    return {
        type : RECEIVE_COMMENTS,
        comments,
    }
}

function addComment (comment) {
    return {
      type: ADD_COMMENT,
      comment,
    }
  }

  export function handleAddComment (body, author, parentId) {
    return (dispatch) => {
      return saveComment({
        id : uuidv4(),
        timestamp : Date.now(),
        body,
        author,
        parentId
      })
        .then((comment) => {
            dispatch(addComment(comment))
        })
    }
  }

  function editComment (comment) {
    return {
      type: EDIT_COMMENT,
      comment,
    }
  }

  export function handleEditComment (id, body) {
    return (dispatch) => {
      return updateComment(id, {
        timestamp : Date.now(),
        body,
      })
        .then((comment) => {
            dispatch(editComment(comment))
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
          return setCommentVote(info)
          .then((comment) => dispatch(commentVote(comment)))
          .catch((e) => {
              console.warn('Error in handleCommentVote: ', e)
              dispatch(commentVote(info))
              alert('The was an error liking or disliking a post. Try again.')
          })
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