import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { FaCommentAlt, FaRegHandPeace, FaTh } from "react-icons/fa";

const Post = (props) => {
    return (
        <ul>
            {props.posts.map((comment) =>
              <li className="comment-card">
                <Card body outline color="primary">
                    <CardTitle className="title"> {comment.title}</CardTitle>
                    <CardText className="author">{comment.author}
                            <div className="icon-category ">
                                <FaTh className="icon"/> 
                                <div className="icon-value">{comment.category} </div>
                            </div>
                    </CardText>

                    <CardText className="body-post">{comment.body}</CardText>
                    <div className="icons-votes">
                            <FaCommentAlt className="icon"/> 
                            <div className="icon-value">{comment.commentCount} </div>
                            <FaRegHandPeace className="icon"/>
                            <div className="icon-value">{comment.voteScore} </div>
                    </div>
                </Card>
              </li>
            )}
        </ul> 
    )
}

export default Post;