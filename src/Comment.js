import React, { Component } from 'react';

class Comment extends Component{
    render(){
        return(
            <div>
                <div className='comment'>
                    <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                    </div>
                    <p>{this.props.comment.content}</p>
                </div>
            </div>
        )
    }
}

export default Comment;