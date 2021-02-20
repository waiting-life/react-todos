import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {
  // 对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  // 键盘事件的回调
  handleKeyUp = (event) => {
    const { target, keyCode } = event
    const todo = { id: nanoid(), content: target.value, done: false }
    if (target.value.trim() !== '' && keyCode === 13) {
      this.props.addTodo(todo)
      target.value = ''
    }
  }

  // 提问按钮的回调
  handleClick = () => {
    const {inputNode} = this
    if (inputNode.value.trim() !== '') {
      const todo = { id: nanoid(), content: inputNode.value, done: false }
      this.props.addTodo(todo)
      inputNode.value = ''
    }
  }
  render() {
    return (
      <div className="todos-header">
        <input className="header-input" ref={currentNode => this.inputNode = currentNode} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        <button onClick={this.handleClick} className="header-btn">提交</button>
      </div>
    )
  }
}
