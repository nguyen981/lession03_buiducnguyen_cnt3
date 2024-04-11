import React from 'react'

export default function BDN_FuncDemo(props) {
  return (
    <div>
      <hr/>
      <h2>Function Component Demo</h2>
      <h3>Su dung thuoc tinh tu props</h3>
      <p> UserName: {props.userName} </p>
      <p> FullName: {props.fullName} </p>
      <p> Age: {props.age} </p>
    </div>
  )
}
