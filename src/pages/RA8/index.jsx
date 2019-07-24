import React, { useState, useEffect } from 'react'
import './style.scss'

function RA8() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: 'fuck',
    age: 100
  })
  useEffect(() => {
    document.title = 'useEffect --- React Hooks'
  })

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <div>
        <h3>
          {user.name}...{user.age}
        </h3>
        <button
          onClick={() => {
            setUser({
              ...user,
              age: user.age + 1
            })
          }}
        >
          长命百岁
        </button>
      </div>
    </div>
  )
}

export default RA8
