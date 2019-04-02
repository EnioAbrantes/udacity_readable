import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handlePostVote } from '../actions/posts'
import { Card, CardTitle, CardText } from 'reactstrap';
import { FaCommentAlt, FaRegHandPointUp, FaRegHandPointDown, FaTh, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

class Post extends Component {

    handleVote = (id, vote) => {
        console.log(id + vote);
        this.props.dispatch(handlePostVote({
            id : id,
            vote : vote
        }))
        /* dispatch(handlePostVote({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        })) */
    }


    render(){
        console.log("posts2" + this.props.posts2)
        return (
            <ul>
                <h1 className="Header-center">Posts</h1>
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
                                <FaCommentAlt className="icon"/> 
                                <div className="icon-value">{comment.commentCount} </div>
                                <FaRegHandPointUp onClick={() => this.handleVote(comment.id, "upVote")} className="icon"/>
                                <div className="icon-value">{comment.voteScore} </div>
                                <FaRegHandPointDown onClick={() => this.handleVote(comment.id, "downVote")} className="icon"/>
                                
                        </div>
                    </Card>
                </li>
                )}
            </ul> 
        )
    }
}

function mapStateToProps ({posts}) {
    console.log("mapstate" + posts)
    return ({
        posts2 : posts
    })
  }

export default connect(mapStateToProps)(Post);