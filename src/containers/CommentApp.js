import React, { Component } from 'react'
import BraftEditor from './BraftEditor'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

import { Carousel, Card, Table } from 'antd';
import Draggable from 'react-draggable';

export default class CommentApp extends Component {
  render() {
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park',
    }, {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    }];

    const renderContent = (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      obj.props.colSpan = 2;
      if (index === 0) {
        obj.props.rowSpan = data.length;
      }else{
        obj.props.rowSpan = 0;
      }
      return obj;
    };

    const columns = [{
      title: '签单产品',
      dataIndex: 'name',
      className: 'ant-table-tdwidth',
    }, {
      title: '本月已签约客户数量',
      dataIndex: 'age',
      className: 'ant-table-tdwidth',
    }, {
      title: '本月已激活客户数量',
      dataIndex: '',
      render: renderContent,
    }, {
      title: '我的分值',
      dataIndex: '',
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        obj.props.rowSpan = 0;
        obj.props.colSpan = 0;
        return obj;
      }
    }];

    return (
      <div className='wrapper'>

        <Table columns={columns} dataSource={data} bordered pagination={false} scroll={{ y: 140 }} />

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
          defaultPosition={{ x: 0, y: 0 }}
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