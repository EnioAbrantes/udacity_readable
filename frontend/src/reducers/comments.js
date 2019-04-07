import { COMMENTS_POST, VOTE_COMMENT, REMOVE_COMMENT, ADD_COMMENT, EDIT_COMMENT } from '../actions/comments'

export default function comments (state = {}, action) {
  switch(action.type) {
    case COMMENTS_POST :
        return {
          ...state,
          ...action.comments,
        } 
      case VOTE_COMMENT :
        return Object.values(state).map((comment) => (
          comment.id === action.comment.id? action.comment : comment
        ))
      case REMOVE_COMMENT :
        return Object.values(state).filter(comment => comment.id !== action.id)
      case ADD_COMMENT :
        return {
          ...state,
        }  
      case EDIT_COMMENT :
        return {
          ...state,
        }  
      default:
        return state
  }
} 
