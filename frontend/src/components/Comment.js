import React, { Component } from 'react'
import { AvForm, AvField} from 'availity-reactstrap-validation';
import { connect } from 'react-redux'
import { Button } from 'reactstrap';
import { handleShowComments, handleAddComment, handleEditComment } from '../actions/comments'
import { handleUpdateOnePost } from '../actions/posts'
import { handleInitialPosts} from '../actions/shared'

class Comment extends Component{

    state = {}

    handleComment = () => {
        var { body , author} = this.state;

        this.props.isEdit? this.props.handleEditComment(this.props.commentId, body) : this.props.handleAddComment(body, author, this.props.id)
        //update the list of comments
        this.props.handleShowComments(this.props.id)
        //update the number of comments
        this.props.handleUpdateOnePost(this.props.id)
        //this.props.handleInitialPosts()

    }

    handleChangeBody = (e) => {
        const body = e.target.value
        this.setState({
            body
        })
    }

    handleChangeAuthor = (e) => {
        const author = e.target.value
        this.setState({
            author
        })
    }

    validateButton = () => (
        (this.state.body && this.state.author) || (this.props.isEdit &&  this.state.body)
    )


    render(){
        var { isEdit } = this.props
        return(
            <div>
                <AvForm onValidSubmit={this.handleComment} row>
                    {!isEdit? 
                    <AvField 
                        type="author"
                        name="author"
                        id="addCommentAuthorID"
                        placeholder="Type your name"
                        onChange = {(e) => this.handleChangeAuthor(e)}
                        required 
                    />
                    : false}
                    <AvField 
                        type="textarea"
                        name="text"
                        id="addCommentBodyID"
                        placeholder={isEdit? "Edit the comment": "Type a new comment"}
                        onChange = {(e) => this.handleChangeBody(e)}
                        required 
                    />
                    </AvForm>
                    <Button color= {this.validateButton()? 'primary' : "danger"} onClick={() => this.validateButton() && this.handleComment()} style={{ left: '50%', textAlign: 'center', marginLeft:'auto', marginRight: 'auto'}}>
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
        handleUpdateOnePost : (id) => dispatch(handleUpdateOnePost(id)),
    })
}


export default connect(null, mapDispatchToProps)(Comment);