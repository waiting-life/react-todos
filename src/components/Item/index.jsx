import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
  state = {mouse: false}  // 标识鼠标移入移出

  // 鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  // 勾选取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      const {checked} = event.target
      this.props.updateTodo(id, checked)
    }
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    // console.log('通知App删除', id)
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  // handleDelete = (id) => {
  //   return () => {

  //   }
  // }
  render() {
    const { id, content, done } = this.props
    const { mouse } = this.state
    return (
      <li className="todos-item" style={{backgroundColor: mouse ? "#eee" : "#fff"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{content}</span>
        </label>
        <button onClick={ () => this.handleDelete(id) } className="btn btn-danget" style={{display: mouse ? "block" : "none"}}>删除</button>
        {/* <button onClick={this.handleDelete} className="btn btn-danget" style={{ display: mouse ? "block" : "none" }}>删除</button> */}
      </li>
    )
  }
}
