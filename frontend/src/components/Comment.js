import React, { Component } from 'react'
import { FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { handleShowComments, handleAddComment, handleEditComment } from '../actions/posts'
import { handleInitialPosts} from '../actions/shared'

class Comment extends Component{

    state = {}

    handleComment = () => {
        var { body , author} = this.state;

        this.props.isEdit? this.props.handleEditComment(this.props.commentId, body) : this.props.handleAddComment(body, author, this.props.id)
        //update the list of comments
        this.props.handleShowComments(this.props.id)
        //update the number of comments
        this.props.handleInitialPosts()
    }

    handleChangeBody = (e) => {
        const body = e.target.value
        console.log(body)
        this.setState({
            body
        })
    }

    handleChangeAuthor = (e) => {
        const author = e.target.value
        console.log(author)
        this.setState({
            author
        })
    }

    render(){
        var { isEdit } = this.props
        return(
            <div>
                <FormGroup row>
                    {!isEdit? 
                    <Input 
                        type="author"
                        name="author"
                        id="addCommentAuthorID"
                        placeholder="Type your name"
                        onChange = {(e) => this.handleChangeAuthor(e)}
                        required 
                    />
                    : false}
                    <Input 
                        type="textarea"
                        name="text"
                        id="addCommentBodyID"
                        placeholder={isEdit? "Edit the comment": "Type a new comment"}
                        onChange = {(e) => this.handleChangeBody(e)}
                        required 
                    />
                    </FormGroup>
                    <Button color= {'primary'} onClick={() => this.handleComment()} style={{ left: '50%', textAlign: 'center', marginLeft:'auto', marginRight: 'auto'}}>
                        {isEdit? "Update comment": "Add Comment"}
                    </Button>
                    
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return ({
        handleAddComment : (body, author, parendId) => dispatch(handleAddComment(body, author, parendId)),
        handleEditComment : (id, body) => dispatch(handleEditComment(id, body)),
        handleShowComments : (id) => dispatch(handleShowComments(id)),
        handleInitialPosts : () => dispatch(handleInitialPosts()),
    })
}


export default connect(null, mapDispatchToProps)(Comment);