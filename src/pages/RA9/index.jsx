// // 用浏览器 api 实现 router
// import React, { useState } from 'react'
// import './style.scss'

// function SignIn() {
//   return <div>sign in</div>
// }

// function SignUp() {
//   return <div>sign up</div>
// }

// function RA9() {
//   const [ui, setUi] = useState(window.location.hash === '#signin' ? 0 : 1)
//   const handleSignin = () => {
//     setUi(0)
//     window.location.hash = 'signin'
//   }
//   const handleSignUp = () => {
//     setUi(1)
//     window.location.hash = 'signup'
//   }
//   return (
//     <div>
//       <button onClick={handleSignin}>登录</button>
//       <button onClick={handleSignUp}>注册</button>
//       <div>{ui === 0 ? <SignIn /> : <SignUp />}</div>
//     </div>
//   )
// }

// export default RA9

//-----------------------------------------------------------
// 用 react router 实现

// 用浏览器 api 实现 router
import React from 'react'
import './style.scss'
import { BrowserRouter as Rotuer, Route, Link } from 'react-router-dom'

function SignIn() {
  return <div>sign in</div>
}

function SignUp() {
  return <div>sign up</div>
}

function RA9() {
  return (
    <div>
      <Rotuer>
        <Link to="/signin">
          <button>登录</button>
        </Link>
        <Link to="/signup">
          <button>注册</button>
        </Link>
        <Route path="/" exact component={RA9} />
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
      </Rotuer>
    </div>
  )
}

export default RA9
