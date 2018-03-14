import React, { Component } from 'react'
import BraftEditor from './BraftEditor'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

import { Carousel, Card } from 'antd';
import Draggable from 'react-draggable';
export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
        <Carousel vertical autoplay dots={false}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <Card title="Card title" extra={<span><span className='handle'>拖动</span></span>} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
          </Card>
        </Draggable>
        <BraftEditor />
      </div>
    )
  }
}