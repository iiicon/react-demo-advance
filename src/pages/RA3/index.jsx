import React from 'react'
import './style.scss'

function Square(props) {
  return (
    <button
      className='square'
      onClick={() => {
        props.onClick()
      }}
    >
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
  }

  render() {
    return (
      <div>
        {[1, 2, 3].map((item, i) => (
          <div className='board-row' key='i'>
            {[item * 3 - 1, item * 3 - 2, item * 3 - 3].map(s => this.renderSquare(s))}
          </div>
        ))}
      </div>
    )
  }
}

class RA3 extends React.Component {
  constructor() {
    super()
    this.state = {
      history: [
        {
          x: 0,
          y: 0,
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    })
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice(0)
    if (caculatorWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([
        {
          x: history.length % 3 === 1 ? 1 : history.length % 3 === 2 ? 2 : 3,
          y: Math.ceil(history.length / 3),
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }
  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = caculatorWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'
      let DescLabel = () => {
        if (current === step) {
          return <strong>{desc}</strong>
        } else {
          return <span>{desc}</span>
        }
      }
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            <DescLabel />
            坐标：（{step.x}, {step.y}）
          </button>
        </li>
      )
    })

    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares={current.squares}
            onClick={i => {
              this.handleClick(i)
            }}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

function caculatorWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a].val
    }
  }
  return null
}

export default RA3
