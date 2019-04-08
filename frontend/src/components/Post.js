import React from 'react';
import { connect } from 'react-redux'
import { Col } from 'reactstrap';
import PostDetails from './PostDetails';

const Post = (props) =>  {

    return (
        <Col sm="3" md={{ size: 8, offset: 3 }}>
            <ul>
                <h1 className="Header-center">Posts</h1>
                {props.posts.length 
                ?props.posts.map((post) =>
                <li className="comment-card">
                    <PostDetails post={post}/>
                </li>
                )
                : <span style={{fontSize: '30px'}}> There is no posts yet =x</span>}
            </ul> 
        </Col>
    )
}

  function mapStateToProps({ posts}){
    return {
      posts : Object.values(posts),
    }
}

export default connect(mapStateToProps)(Post);