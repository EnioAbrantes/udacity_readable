import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote, handleDeletePost } from '../actions/posts'
import { handleCommentVote, handleShowComments, handleDeleteComment } from '../actions/comments'
import { Card, CardTitle, CardText, Col, Collapse, Button, CardBody, UncontrolledCollapse  } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt, FaPodcast, FaReply } from "react-icons/fa";
import { recoverDate } from '../utils/RecoverDate'
import { Link } from 'react-router-dom'
import { AvField, AvGroup } from 'availity-reactstrap-validation';
import Comment from './Comment';

class Post extends Component {

    state = {
        collapseComment: true,
        addComment: true,
        editComment: true,
    }

    handlePostVote = (id, vote) => {
        this.props.handlePostVote(id, vote)
    }

    handleCommentVote = (id, vote) => {
        this.props.handleCommentVote(id, vote)
    }

    handleRemovePost = (id) => {
        this.props.handleDeletePost(id)
    }

    handleRemoveComment = (id) => {
        this.props.handleDeleteComment(id)
    }

    handleShowComments = (id) => {
        this.toggleShowComments(id);
        this.props.handleShowComments(id)
    }

    toggleShowComments = (id) => {
        this.setState(state => ({ collapseComment: id === state.collapseComment? false : id}));
    }

    toggleAddComment = (id) => {
        this.setState(state => ({ addComment: id === state.addComment? false : id}));
    }

    toggleEditComment = (id) => {
        this.setState(state => ({ editComment: id === state.editComment? false : id}));
    }

    render(){
        return (
            <Col sm="3" md={{ size: 8, offset: 3 }}>
                <ul>
                    <h1 className="Header-center">Posts</h1>
                    {this.props.posts.length 
                    ?this.props.posts.map((post) =>
                    <li className="comment-card">
                        <Card body outline color="primary">
                            <CardTitle className="title">
                                <CardText>
                                    <div className="icon-category">
                                        <Link to={{
                                            pathname: "/editPost",
                                            state: { id: post.id, title: post.title , body: post.body }
                                        }} exact activeClassName='active'>
                                            <FaRegEdit className='icon'/> 
                                        </Link>  
                                        <FaRegTrashAlt onClick={() => this.handleRemovePost(post.id)} className='icon'/> 
                                    </div>
                                </CardText>
                                {post.title}
                            </CardTitle>
                            <CardText className="author">{post.author}
                                    <div className="icon-category">
                                        <FaTh className="icon"/> 
                                        <div className="icon-value">{post.category} </div>
                                    </div>
                            </CardText>

                            <CardText className="body-post">{post.body}</CardText>
                                
                            <FaReply className="icon" onClick={() => this.toggleAddComment(post.id)} />
                            
                            <div className="icons-votes">
                                    
                                    <CardText className="date-post">{recoverDate(post.timestamp)}</CardText>
                                    <FaCommentAlt className="icon" onClick={() => this.handleShowComments(post.id)}/> 
                                    <div className="icon-value">{post.commentCount} </div>
                                    <FaRegHandPointUp onClick={() => this.handlePostVote(post.id, "upVote")} className="icon"/>
                                    <div className="icon-value">{post.voteScore} </div>
                                    <FaRegHandPointDown onClick={() => this.handlePostVote(post.id, "downVote")} className="icon"/>
                                    
                            </div>

                            <Collapse isOpen = {this.state.collapseComment === post.id && post.commentCount}>
                                <Card>
                                    {this.props.comments.map( (comment) =>
                                        <div>
                                            <CardBody style={{padding: '0px', marginTop: '15px', marginLeft: '25px', marginRight : '15px'}}>
                                                {post.id === comment.parentId? comment.body: false}

                                                    <div className="icon-category">
                                                        <FaRegEdit className='icon' onClick={() => this.toggleEditComment(comment.id)}/> 
                                                        <FaRegTrashAlt onClick={() => this.handleRemoveComment(comment.id)} className='icon'/> 
                                                    </div>

                                            </CardBody>
                                            <CardBody style={{padding: '0px', marginTop: '35px', marginRight : '15px'}}>
                                                <div className="icons-votes" >
                                                    <CardText className="date-post">{recoverDate(comment.timestamp)}</CardText>
                                                    <FaRegHandPointUp onClick={() => this.handleCommentVote(comment.id, "upVote")} className="icon"/>
                                                    <div className="icon-value">{comment.voteScore} </div>
                                                    <FaRegHandPointDown onClick={() => this.handleCommentVote(comment.id, "downVote")} className="icon"/>
                                                </div>
                                            </CardBody>
                                            <Collapse isOpen = {this.state.editComment === comment.id}>
                                                <Comment id={post.id} isEdit={true} commentId={comment.id}/>
                                            </Collapse >
                                            <hr style={{marginTop: '1px', marginBottom: '0px'}}/>
                                        </div>
                                    )}
                                </Card>
                            </Collapse >

                            <Collapse isOpen = {this.state.addComment === post.id}>
                                <Comment id={post.id} isEdit={false}/>
                            </Collapse >
                                
                            
                            
                        </Card>
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