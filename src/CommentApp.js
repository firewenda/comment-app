import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor(){
        super();
        this.state = {
            comments: []
        }
    }

    handleSubmitComment(comment){
        if(!comment || !comment.username || !comment.content) return;

        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
        //console.log(comment);
    }

    render(){
        return(
            <div className='wrapper'>
                <CommentInput
                onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;