import { getCategories } from '../utils/api'
import { receiveCategories } from '../actions/categories'
import { receiveComments } from '../actions/comments'
import { receivePosts } from '../actions/posts'


export function handleInitialCategories () {
  return (dispatch) => {
    console.log(getCategories())
    return getCategories()
      .then(({ name, path }) => {
        
        dispatch(receiveCategories(name, path))
      })
  }
} 