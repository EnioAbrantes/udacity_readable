import React, { Component } from 'react'

class newPost extends Component{

    state = {
        text = "",
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState({
            text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state;

        //todo: Add Post to Store

        console.log(`New Post: ${text}`)

        this.setState(() => ({
            text : ''
        }))
    }

    render(){

        const { text } = this.state;
        {/* todo: Redirect to /if submitted */}

        const charsLeft = 280 - text.length

        return (
            <h3> Type a new Post</h3>
        )
    }
}
export default NewPost;