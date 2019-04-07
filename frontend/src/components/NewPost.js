import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import { handleAddPost, handleReceivePost, handleEditPost } from '../actions/posts'
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AvRadioGroup, AvRadio, AvForm, AvField, AvGroup, AvFeedback  } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom'

class NewPost extends Component{

    componentDidMount() {
        this.props.match.params.id? this.props.dispatch(handleReceivePost(this.props.match.params.id)) : this.props.dispatch(handleInitialCategories())
    }

    state = {}

    handleChangeBody = (e) => {
        const body = e.target.value
        console.log(body)
        this.setState({
            body
        })
    }

    handleChangeTitle = (e) => {
        const title = e.target.value
        console.log(title)
        this.setState({
            title
        })
    }
    handleChangeCategorie = (e) => {
        const categorie = e.target.value
        console.log(categorie)
        this.setState({
            categorie
        })
    }
    handleChangeAuthor = (e) => {
        const author = e.target.value
        console.log(author)
        this.setState({
            author
        })
    }

    handleSubmit = () => {
        const { title, body, author, categorie } = this.state;
        const { dispatch } = this.props

        this.props.match.params.id ? dispatch(handleEditPost(this.props.match.params.id, title, body)) : dispatch(handleAddPost(title, body, author, categorie))

        this.setState(() => ({
            title : "",
            body : "",
            author : "",
            categorie : ""
        }))
    }

    validateButton = () => (
        this.state.title && this.state.body && this.state.author && this.state.categorie || (this.props.match.params.id && this.state.title || this.state.body)
    )

    render(){

        const { body } = this.state;
        const { id } = this.props.match.params;

        return (
        <div>
            <AvForm onValidSubmit={this.handleSubmit}>
                <AvGroup classname='new-post'>
                    <Col sm="12" md={{ size: 12, offset: 5 }}>
                        <h3>{id? 'Edit the post' : 'Type a New Post'}</h3>
                    </Col>
                </AvGroup>
                <AvGroup row>
                    <Col sm="1" md={{ size: 1, offset: 2 }}>
                        <p style={{textAlign:'end', verticalAlign:'baseline', paddingTop: "7px"}} for="titleID">Title:</p>
                    </Col>
                    <Col sm="6" md={{ size: 6, offset: 0}}>
                            <AvField 
                                type="title"
                                name="title"
                                id="titleID"
                                placeholder={id? 'Edit your title' : "Type a title"}
                                value= {id? this.props.posts.title: null}
                                onChange = {(e) => this.handleChangeTitle(e)}
                                required 
                            />
                    </Col>
                </AvGroup>
                {!id?  
                    <AvGroup row>
                        <Col sm="1" md={{ size: 1, offset: 2 }}>
                            <p style={{textAlign:'end', verticalAlign:'baseline', paddingTop: "7px"}} for="authorID">Author:</p>
                        </Col>
                        <Col sm="6" md={{ size: 6, offset: 0}}>
                            <AvGroup>
                                <AvField 
                                type="author"
                                name="author"
                                id="authorID"
                                placeholder="Type your name"
                                onChange = {(e) => this.handleChangeAuthor(e)}
                                required 
                            />
                            </AvGroup>
                        </Col>
                    </AvGroup>
                : false}
                <AvGroup row>
                    <Col sm="1" md={{ size: 1, offset: 2 }}>
                        <p style={{textAlign:'end', verticalAlign:'baseline', paddingTop: "12px"}} for="textID">Post:</p>
                    </Col>
                    <Col sm="6" md={{ size: 6, offset: 0}}>
                        <AvField 
                            type="textarea"
                            name="text"
                            id="textID"
                            placeholder={id? 'Edit your post' : 'Type your post'}
                            value= {id? this.props.posts.body: null}
                            onChange = {(e) => this.handleChangeBody(e)}
                            required 
                        />
                    </Col>
                </AvGroup>
                {!id? 
                <AvGroup row>
                    <Col sm="2" md={{ size: 4, offset: 1 }}>
                        <h5 style={{textAlign:'end', verticalAlign:'baseline', paddingRight: "12px"}}>Select the category:</h5>
                    </Col>
                    <Col sm="2" md={{ size: 3, offset: 0}}>
                        <AvRadioGroup inline name="radioExample" required errorMessage="Pick one!">
                            {this.props.categories.map((categorie) => (
                                    <p style={{verticalAlign:'baseline', margin: "0px", paddingRight: "12px" }} check>
                                        <AvRadio onChange = {(e) => this.handleChangeCategorie(e)} value={categorie.name}/> {categorie.name}
                                    </p>
                            ))}
                        </AvRadioGroup>
                    </Col>
                </AvGroup>
                : false}
                <FormGroup row>
                    <Col sm="2" md={{ size: 3, offset: 5}}>
                        <Link to='/' exact activeClassName='active' style={{color : "black"}} onClick={e => this.validateButton()? this.handleSubmit() : e.preventDefault()}>
                            <Button color= {this.validateButton()? 'primary' : "danger"} onclick={() => this.handleSubmit()}>
                                {id? 'Edit Post' : 'Add Post'}
                            </Button>
                        </Link>
                    </Col>
                </FormGroup>
            </AvForm>
        </div>
        
        )
    }
}

function mapStateToProps({ categories, posts }){
    return {
      categories : Object.values(categories),
      posts
    }

  }

export default connect(mapStateToProps)(NewPost);