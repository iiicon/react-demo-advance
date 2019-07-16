/**
 * redux && 发布订阅模式
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './style.scss'

let reducers = (state, action) => { // reducer
  state = state || { money: 10000 }
  switch (action.type) {
    case 'cost':
      return {
        money: state.money - action.payload
      }
    default:
      return state
  }
}

let store = createStore(reducers)  // store

class RA22 extends Component {
  render() {
    return (
      <div className="root">
        <BigPapa money={store.getState().money} />
        <YoungPapa money={store.getState().money} />
      </div>
    )
  }
}

class BigPapa extends Component {
  render() {
    return (
      <div className="papa">
        大爸爸
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
      </div>
    )
  }
}

class YoungPapa extends Component {
  render() {
    return (
      <div className="papa">
        二爸爸
        <Son3 money={this.props.money} />
        <Son4 money={this.props.money} />
      </div>
    )
  }
}

class Son1 extends Component {
  pay() {
    store.dispatch({ type: 'cost', payload: 100 }) // dispatch
  }
  render() {
    return (
      <div className="son">
        大儿子
        <div>{this.props.money}</div>
        <button id="button" onClick={this.pay}>
          花钱
        </button>
      </div>
    )
  }
}

function Son2(props) {
  return (
    <div className="son">
      二儿子
      <div>{props.money}</div>
    </div>
  )
}

function Son3(props) {
  return (
    <div className="son">
      三儿子
      <div>{props.money}</div>
    </div>
  )
}

function Son4(props) {
  return (
    <div className="son">
      四儿子
      <div>{props.money}</div>
    </div>
  )
}

const render = () =>
  ReactDOM.render(
    <RA22 />,
    document.getElementById('root2')
  )
render()
store.subscribe(render) // subscribe

export default RA22
