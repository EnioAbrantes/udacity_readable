import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import { Button, Col, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';
import Post from './Post'
import {handlePostsFromCategory, handleOrderPosts} from '../actions/posts'
import { Link } from 'react-router-dom'

class Container extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialCategories())
        this.props.dispatch(handleInitialPosts())
    }

    handleCategories = (e) => {
        this.props.dispatch(handlePostsFromCategory(e.target.value))
    }

    comparePostsByVote = (a, b) => {
        if (a.voteScore < b.voteScore)
          return -1;
        return a.voteScore > b.voteScore ? 1 : 0
      }

    comparePostsByDate = (a,b) => {
        if (a.timestamp < b.timestamp)
          return -1;
        return a.timestamp > b.timestamp ? 1 : 0
      }

    handleOrderByVotes = () => {
        this.props.dispatch(handleOrderPosts(Object.values(this.props.posts).sort(this.comparePostsByVote).reverse()))
    }

    handleOrderByDate = () => {
        this.props.dispatch(handleOrderPosts(Object.values(this.props.posts).sort(this.comparePostsByDate)))
    }

    render(){
        return (
            <div className="inlineInfo">
                <Col sm="3" md={{ size: 2, offset: 1}}>
                    <ul className='categories'>
                        <h2>Categories</h2>
                        {this.props.categories.map((category) =>
                            <li>
                                <Link to= {`/${category.name}`} exact activeClassName='active'>
                                    <Button style={{width: '100%'}} onClick={ (e) => this.handleCategories(e)} outline color="primary" size="lg" value={category.name} >{category.name}</Button>
                                </Link>
                            </li>
                        )}
                    </ul> 
                </Col>    
                <Post />
                <UncontrolledButtonDropdown color="primary" style={{height: '40px', marginTop : '77px', marginLeft : '-30px'}}>
                    <DropdownToggle caret>
                        Order by
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.handleOrderByVotes()}>Votes</DropdownItem>
                        <DropdownItem onClick={() => this.handleOrderByDate()}>Date</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
        )
    }
}

function mapStateToProps({ categories, posts, comments }){
    return {
      categories : Object.values(categories),
      posts : Object.values(posts),
      comments : Object.values(comments)
    }
}

export default connect(mapStateToProps)(Container);