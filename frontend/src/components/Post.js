import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote, handleDeletePost } from '../actions/posts'
import { handleCommentVote, handleShowComments, handleDeleteComment } from '../actions/comments'
import { Card, CardTitle, CardText, Col, Collapse, Button, CardBody, UncontrolledCollapse  } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt, FaPodcast, FaReply, FaInfo } from "react-icons/fa";
import { recoverDate } from '../utils/RecoverDate'
import { Link } from 'react-router-dom'
import { AvField, AvGroup } from 'availity-reactstrap-validation';
import Comment from './Comment';
import PostDetails from './PostDetails';

class Post extends Component {

    render(){
        return (
            <Col sm="3" md={{ size: 8, offset: 3 }}>
                <ul>
                    <h1 className="Header-center">Posts</h1>
                    {this.props.posts.length 
                    ?this.props.posts.map((post) =>
                    <li className="comment-card">
                        <PostDetails post={post}/>
                    </li>
                    )
                    : <span style={{fontSize: '30px'}}> There is no posts yet =x</span>}
                </ul> 
            </Col>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return ({
        handlePostVote : (id, vote) => dispatch(handlePostVote({id, vote})),
        handleCommentVote : (id, vote) => dispatch(handleCommentVote({id, vote})),
        handleDeletePost : (id) => dispatch(handleDeletePost(id)),
        handleShowComments : (id) => dispatch(handleShowComments(id)),
        handleDeleteComment : (id) => dispatch(handleDeleteComment(id)),
    })
  }

  function mapStateToProps({ posts, comments }){
    let orderCommentsByVotes = Object.values(comments) && Object.values(comments).sort((a,b) => b.voteScore - a.voteScore)
    return {
      comments : Object.values(orderCommentsByVotes),
      posts : Object.values(posts),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);