import { getCategories } from '../utils/api'
import { receiveCategories } from '../actions/categories'
import { receiveComments } from '../actions/comments'
import { receivePosts } from '../actions/posts'


export function handleInitialCategories () {
  return (dispatch) => {
    return getCategories()
      .then(({ categories }) => {
        dispatch(receiveCategories(categories))
      })
  }
} 