import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {
    todos: [
      { id: 1, content: 'cpp', done: false },
      { id: 2, content: 'cjz', done: false },
      { id: 3, content: 'clg', done: false },
      { id: 4, content: 'cxz', done: false },
    ]
  }

  // addTodo用于添加一个todo，接收的参数是todo对象
  addTodo = (todo) => {
    const { todos } = this.state
    const newTodos = [todo, ...todos]
    this.setState({ todos: newTodos })
  }

  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const { todos } = this.state
    // 匹配处理数据
    const newTodos = todos.map(todo => {
      // if (todo.id === id) return {...todo, done: done}
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })
    this.setState({ todos: newTodos })
  }

  // deleteTodo用于删除一个todo
  deleteTodo = (id) => {
    // console.log(id)
    const { todos } = this.state
    // todos.forEach((todo, index) => {
    //  if (todo.id === id) {
    //     todos.splice(index, 1)
    //   }
    // })
    // this.setState({ todos })
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
 
  // checkAllTodo用于全选
  checkAllTodo = (done) => {
    // 获取原来的todos
    const { todos } = this.state
    // 加工数据
    const newTodos = todos.map( todo => {
      return { ...todo, done }
      // return { ...todo, done: done }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }

  // clearALLDone用于清除所有已完成
  clearAllDone = () => {
    // 获取原来的todos
    const { todos } = this.state
    const newTodos = todos.filter( todo => {
      // return todo.done === false
      return !todo.done
    })
    this.setState({ todos: newTodos })
  }
  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <Header addTodo = { this.addTodo }/>
        <List todos = { todos } updateTodo = { this.updateTodo } deleteTodo = { this.deleteTodo }/>
        <Footer todos = { todos } checkAllTodo = { this.checkAllTodo } clearAllDone = { this.clearAllDone }/>
      </div>
    )
  }
}

