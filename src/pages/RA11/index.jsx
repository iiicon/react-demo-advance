import React, { useState } from 'react'
import './style.scss'
function RA11() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const onclick = () => {
    setX(x + 1)
  }
  const handleApp = () => {
    setY(1)
  }
  return (
    <div>
      <button onClick={onclick}>onclick</button>
      <button onClick={handleApp}>handleApp</button>
      {y === 0 ? <Child x={x} /> : null}
    </div>
  )
}

class Child extends React.Component {
  constructor(params) {
    super()
    console.log('创建 App')
    this.state = {
      n: 12
    }
  }
  handleClick() {
    console.log(`click-----------------------------${new Date()}`)
    this.setState({
      n: this.state.n + 1
    })
  }
  testthis() {
    console.log(this)
  }
  updateApp() {
    this.setState({
      n: this.state.n + 2
    })
  }
  componentWillMount() {
    console.log('将要挂载 App')
  }
  render() {
    // update
    console.log('渲染或者更新 App')
    return (
      <div>
        {this.state.n}
        <button onClick={() => this.handleClick()}>+1</button>
        <button onClick={() => this.updateApp()}>update+2</button>
        <button onClick={this.testthis}>test this</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('挂载完毕 App')
  }
  shouldComponentUpdate(newProps, newState) {
    // 数组更新但是页面不更新
    if (newState.n % 3 === 0) {
      return false
    }
    return true
  }
  componentWillUpdate() {
    console.log('将要更新 App')
  }
  componentDidUpdate() {
    console.log('更新完成 App')
  }
  componentWillReceiveProps() {
    console.log('上级说话了 App')
    console.log(this.props)
  }
  componentWillUnmount() {
    console.log('将要死亡 App')
  }
}

export default RA11
