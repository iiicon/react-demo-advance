/**
 * eventHub && 单向数据流
 * 这个组件实现了 eventHub 的发布 trigger，订阅 on
 * 以及任意两个组件数据交互，全局数据交互和单向数据流
 */
import React, { Component } from 'react'
import './style.scss'

// 如果我们要给button加一个事件要这么写
// button.on('click', function(data) {data === 'x'})
// button.trigger('click', 'x')

let fnObject = {}
let eventHub = {
  // 发布
  trigger(eventName, data) {
    let fnList = fnObject[eventName]
    if (!fnList) {
      return
    }
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
  },
  // 订阅
  on(eventName, fn) {
    if (!fnObject[eventName]) {
      fnObject[eventName] = []
    }
    fnObject[eventName].push(fn)
  }
}

class RA2_1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      money: 10000
    }
    eventHub.on('cost', data => {
      this.setState({
        money: this.state.money - data
      })
    })
  }

  render() {
    return (
      <div className="root">
        <BigPapa money={this.state.money} />
        <YoungPapa money={this.state.money} />
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
    eventHub.trigger('cost', 100)
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


export default RA2_1
