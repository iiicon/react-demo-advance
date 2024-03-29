import React, { Component } from 'react'
import "./style.scss";
import { connect } from 'react-redux'

class RA6 extends Component {
  add2() {
    this.props.onAdd2()
  }
  add3() {
    this.props.onAdd3()
  }
  add4() {
    this.props.onAdd4()
  }
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={() => this.props.add()}>
            +1
          </button>
          <button id="add2" onClick={() => this.add2()}>
            +2
          </button>
          <button id="add1IfOdd" onClick={() => this.add3()}>
            如果是单数就+1
          </button>
          <button id="add1After2Sec" onClick={() => this.add4()}>
            两秒钟后+1
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { n: state.n }
}
const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch({ type: 'add', payload: 1 })
    },
    onAdd2: () => {
      dispatch({ type: 'add', payload: 2 })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RA6)
