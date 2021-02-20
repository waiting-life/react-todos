import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Footer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    clearAllDone: PropTypes.func.isRequired,
    checkAllTodo: PropTypes.func.isRequired
  }

  // 全选checkbox的回调
  handleCheckAll = (event) => {
    const { checked } = event.target
    this.props.checkAllTodo(checked)
  }

  // 清除已完成任务的回调
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }
  render() {
    const { todos } = this.props
    // 已完成个数的总数
    const doneCount = todos.reduce((pre, todo) =>  pre + (todo.done ? 1 : 0), 0)
    // 总数
    const totalCount = todos.length
    return (
      <div className="todos-footer">
        <label>
          <input type="checkbox" onChange={ this.handleCheckAll } checked={ doneCount === totalCount && totalCount !== 0 ? true : false }/>
        </label>
        <span>
          <span>已完成&nbsp;{ doneCount }</span>&nbsp;/&nbsp;
          <span>全部&nbsp;{ totalCount }</span>
        </span>
        <button className="footer-btn" onClick={ this.handleClearAllDone }>清除已完成任务</button>
      </div>
    )
  }
}
