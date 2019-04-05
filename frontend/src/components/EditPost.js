import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditPost } from '../actions/posts'
import { Button, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom'

class EditPost extends Component{

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

        dispatch(handleEditPost(title, body, author, categorie))

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
            <FormGroup classname='new-post'>
                <Col sm="12" md={{ size: 12, offset: 5 }}>
                    <h3>Edit the Post</h3>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm="1" md={{ size: 1, offset: 2 }}>
                    <p style={{textAlign:'end', verticalAlign:'baseline', paddingTop: "7px"}} for="titleID">Title:</p>
                </Col>
                <Col sm="6" md={{ size: 6, offset: 0}}>
                    <Input
                        type="title"
                        name="title"
                        id="titleID"
                        placeholder="Type a title"
                        value={this.title}
                        onChange = {(e) => this.handleChangeTitle(e)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm="1" md={{ size: 1, offset: 2 }}>
                    <p style={{textAlign:'end', verticalAlign:'baseline', paddingTop: "12px"}} for="textID">Text Area:</p>
                </Col>
                <Col sm="6" md={{ size: 6, offset: 0}}>
                    <Input
                        type="textarea"
                        name="text"
                        id="textID"
                        placeholder={this.body}
                        value={this.state.body}
                        onChange = {(e) => this.handleChangeBody(e)}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm="2" md={{ size: 3, offset: 5}}>
                    <Button  color="primary" onClick={(e) => (this.handleSubmit(e))}>
                        <Link to='/' exact activeClassName='active' style={{color : "black"}}>
                            Submit
                        </Link>
                    </Button>
                </Col>
            </FormGroup>
        </Form>
      
        )
    }
}

function mapStateToProps({ categories }){
    return {
      categories : Object.values(categories)
    }

  }

export default connect(mapStateToProps)(EditPost);