import { getCategories, getPosts } from '../utils/api'
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

export function handleInitialPosts () {
  return (dispatch) => {

    return getPosts()
      .then(( posts ) => {
        dispatch(receivePosts(posts))
      })
  }
} 