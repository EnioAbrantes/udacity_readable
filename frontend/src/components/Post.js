import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'
import { Card, CardTitle, CardText } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

class Post extends Component {

    showComments = (e) => {
        console.log(e);
        /* dispatch(handlePostVote({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        })) */
    }
    render(){
        return (
            <ul>
                {this.props.posts.map((comment) =>
                <li className="comment-card">
                    <Card body outline color="primary">
                        <CardTitle className="title">
                            <CardText>
                                <div className="icon-category">
                                    <FaRegEdit className='icon'/> 
                                    <FaRegTrashAlt className='icon'/> 
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
                                <FaCommentAlt className="icon" onClick={ (e) => this.showComments(e)} /> 
                                <div className="icon-value" onClick={ (e) => this.showComments(e)}>{comment.commentCount} </div>
                                <FaRegHandPointUp className="icon"/>
                                <div className="icon-value" onClick={ (e) => this.handleVote(e, "downVote")}>{comment.voteScore} </div>
                                <FaRegHandPointDown className="icon"/>
                                
                        </div>
                    </Card>
                </li>
                )}
            </ul> 
        )
    }
}

function mapStateToProps ({}) {
    /* const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return {
      authedUser,
      tweet: tweet
        ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
        : null
    } */
  }

export default connect(mapStateToProps)(Post);