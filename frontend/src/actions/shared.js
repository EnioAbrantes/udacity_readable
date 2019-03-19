import { categoriesData } from 'http://localhost:3001/categories'
import { receiveCategories } from '../actions/categories'
import { receiveComments } from '../actions/comments'
import { receivePosts } from '../actions/posts'


export function handleInitialCategories () {
  return (dispatch) => {
    console.log(categoriesData)
    return categoriesData()
      .then(({ name, path }) => {
        dispatch(receiveCategories(name, path))
      })
  }
} 