import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote, handleDeletePost } from '../actions/posts'
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { recoverDate } from '../utils/RecoverDate'

class Post extends Component {

    handleVote = (e, id, vote) => {
        this.props.handlePostVote(id, vote)
    }

    handleRemovePost = (id) => {
        this.props.handleDeletePost(id)
    }

    showDate = (timestamp) => {
        var date = new Date(timestamp*1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    }

    render(){
        return (
            <Col sm="3" md={{ size: 8, offset: 3 }}>
                <ul>
                    <h1 className="Header-center">Posts</h1>
                    {this.props.posts.map((comment) =>
                    <li className="comment-card">
                        <Card body outline color="primary">
                            <CardTitle className="title">
                                <CardText>
                                    <div className="icon-category">
                                        <FaRegEdit className='icon'/> 
                                        <FaRegTrashAlt onClick={() => this.handleRemovePost(comment.id)} className='icon'/> 
                                    </div>
                                </CardText>
                                {comment.title}
                            </CardTitle>
                            <CardText className="author">{comment.author}
                                    <div className="icon-category">
                                        <FaTh className="icon"/> 
                                        <div className="icon-value">{comment.category} </div>
                                    </div>
                            </CardText>

                            <CardText className="body-post">{comment.body}</CardText>

                            

                            <div className="icons-votes">
                                    <CardText className="date-post">{this.showDate(recoverDate(comment.timestamp))}</CardText>
                                    <FaCommentAlt className="icon"/> 
                                    <div className="icon-value">{comment.commentCount} </div>
                                    <FaRegHandPointUp onClick={(e) => this.handleVote(e, comment.id, "upVote")} className="icon"/>
                                    <div className="icon-value">{comment.voteScore} </div>
                                    <FaRegHandPointDown onClick={(e) => this.handleVote(e, comment.id, "downVote")} className="icon"/>
                            </div>
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
        handleDeletePost : (id) => dispatch(handleDeletePost(id))
    })
  }

export default connect(null, mapDispatchToProps)(Post);