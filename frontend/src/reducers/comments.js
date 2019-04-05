import { COMMENTS_POST, VOTE_COMMENT } from '../actions/posts'

export default function comments (state = {}, action) {
  switch(action.type) {
    case COMMENTS_POST :
      console.log('calllll reducer')
        return {
          ...state,
          ...action.comments,
        } 
      case VOTE_COMMENT :
        return Object.values(state).map((comment) => (
          comment.id === action.comment.id? action.comment : comment
        ))
      default:
        return state
  }
} 
