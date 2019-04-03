import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import { Button } from 'reactstrap';
import Post from './Post'
import { handlePostsFromCategory } from '../actions/posts'

class Container extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialCategories())
        this.props.dispatch(handleInitialPosts())
    }

    handleCategories = (e) => {
        this.props.dispatch(handlePostsFromCategory(e.target.value))
    }


    render(){
        return (
            <div className="inlineInfo">
                <ul className='categories'>
                <h2>Categories</h2>
                {this.props.categories.map((categorie) =>
                    <li>
                    <Button style={{width: '100%'}} onClick={ (e) => this.handleCategories(e)} outline color="primary" size="lg" value={categorie.name} >{categorie.name}</Button>
                    </li>
                )}
                </ul> 
                <Post posts = {this.props.posts}/>
            </div>
        )
    }
}

function mapStateToProps({ categories, posts }){
    return {
      categories : Object.values(categories),
      posts : Object.values(posts)
    }
    
  }

export default connect(mapStateToProps)(Container);