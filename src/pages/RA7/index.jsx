import React, { Component } from 'react'
import './style.scss'

const nContext = React.createContext(0)

function F1(props) {
  return (
    <div className="bordered">
      1111
      <F2 />
    </div>
  )
}
function F2(props) {
  return (
    <div className="bordered">
      2222
      <F3 />
    </div>
  )
}
function F3(props) {
  return (
    <div className="bordered">
      3333
      <nContext.Consumer>{x => <F4 n4={x.n} setN={x.setN} />}</nContext.Consumer>
    </div>
  )
}
function F4(props) {
  return (
    <div className="bordered">
      4444, {props.n4}
      <button onClick={props.setN}>Click me</button>
    </div>
  )
}
// -----------------
// 标签里面传递函数
function Consumer(props) {
  // console.log(props.children)
  const child = props.children(9202)
  return (
    <h2>{child}</h2>
  )
}
// -----------------
class RA7 extends Component {
  constructor() {
    super()
    this.state = {
      x: {
        n: 99,
        setN: () => {
          this.setState({
            x: {
              ...this.state.x,
              n: this.state.x.n * 2
            }
          })
        }
      }
    }
  }
  render() {
    return (
      <div>
        <div>
          <Consumer>
            {p => <div>{p}</div>}
            {/* {p => <div>{p}</div>} */}
          </Consumer>
        </div>
        <div>
          <nContext.Provider value={this.state.x}>
            <F1 />
          </nContext.Provider>
        </div>
      </div>
    )
  }
}

export default RA7
