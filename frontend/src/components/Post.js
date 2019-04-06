import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote, handleCommentVote, handleDeletePost, handleShowComments, handleDeleteComment } from '../actions/posts'
import { Card, CardTitle, CardText, Col, Collapse, Button, CardBody, UncontrolledCollapse  } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt, FaPodcast } from "react-icons/fa";
import { recoverDate } from '../utils/RecoverDate'
import { Link } from 'react-router-dom'

class Post extends Component {

    state = {
        collapse: true
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
        this.toggle(id);
        this.props.handleShowComments(id)
    }

    toggle = (id) => {
        console.log(id+this.state.collapse)
        this.setState(state => ({ collapse: id === state.collapse? false : id}));
      }

    render(){
        return (
            <Col sm="3" md={{ size: 8, offset: 3 }}>
                <ul>
                    <h1 className="Header-center">Posts</h1>
                    {this.props.posts.map((post) =>
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
                                

                            <div className="icons-votes">
                                    <CardText className="date-post">{recoverDate(post.timestamp)}</CardText>
                                    <FaCommentAlt className="icon" onClick={() => this.handleShowComments(post.id)}/> 
                                    <div className="icon-value">{post.commentCount} </div>
                                    <FaRegHandPointUp onClick={() => this.handlePostVote(post.id, "upVote")} className="icon"/>
                                    <div className="icon-value">{post.voteScore} </div>
                                    <FaRegHandPointDown onClick={() => this.handlePostVote(post.id, "downVote")} className="icon"/>
                                    
                            </div>
                            <Collapse isOpen = {this.state.collapse === post.id && post.commentCount}>
                                <Card>
                                    {this.props.comments.map( (comment) =>
                                        <div>
                                            <CardBody style={{padding: '0px', marginTop: '15px', marginLeft: '25px', marginRight : '15px'}}>
                                                {post.id === comment.parentId? comment.body: false}

                                                    <div className="icon-category">
                                                        <Link to={{
                                                            pathname: "/editPost",
                                                            state: { id: post.id, title: post.title , body: post.body }
                                                        }} exact activeClassName='active'>
                                                            <FaRegEdit className='icon'/> 
                                                        </Link>  
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
                                            <hr style={{marginTop: '5px', marginBottom: '0px'}}/>
                                        </div>
                                    )}
                                </Card>
                            </Collapse >
                        </Card>
                    </li>
                    )}
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