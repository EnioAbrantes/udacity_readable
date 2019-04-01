import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialCategories, handleInitialPosts} from '../actions/shared'
import { handleAddPost } from '../actions/posts'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewPost extends Component{

    componentDidMount() {
        this.props.dispatch(handleInitialCategories())
    }

    state = {
        title : "",
        body : "",
        author : "",
        categorie : ""
    }

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

    handleSubmit = (e) => {
        e.preventDefault()

        const { title, body, author, categorie } = this.state;
        const { dispatch } = this.props

        dispatch(handleAddPost(title, body, author, categorie))

        this.setState(() => ({
            title : "",
            body : "",
            author : "",
            categorie : ""
        }))
    }

    render(){

        const { body } = this.state;
        {/* todo: Redirect to /if submitted */}

        const charsLeft = 280 - body.length

        return (
        <Form>
            <FormGroup>
                <h3>Type a New Post</h3>
            </FormGroup>
            <FormGroup>
            <Label for="titleID">Title</Label>
            <Input
                type="title"
                name="title"
                id="titleID"
                placeholder="Type a title"
                onChange = {(e) => this.handleChangeTitle(e)}
            />
            </FormGroup>
            <FormGroup>
            <Label for="authorID">Author</Label>
            <Input
                type="author"
                name="author"
                id="authorID"
                placeholder="type your name"
                onChange = {(e) => this.handleChangeAuthor(e)}
            />
            </FormGroup>
            <FormGroup>
                <Label for="textID">Text Area</Label>
                <Input type="textarea" name="text" id="textID" onChange = {(e) => this.handleChangeBody(e)}/>
            </FormGroup>
            <FormGroup check>
                {this.props.categories.map((categorie) => (
                    <Label check>
                        <Input type="radio" onChange = {(e) => this.handleChangeCategorie(e)} value={categorie.name}/> {categorie.name}
                    </Label>
                ))}
            </FormGroup>
            <FormGroup check>
            <Label check>
                <Input type="checkbox" onChange = {(e) => this.handleChangeTitle(e)} /> Check me out
            </Label>
            </FormGroup>
            <Button onClick={(e) => (this.handleSubmit(e))}>Submit</Button>
        </Form>
      
        )
    }
}

function mapStateToProps({ categories }){
    return {
      categories : Object.values(categories)
    }

  }

export default connect(mapStateToProps)(NewPost);