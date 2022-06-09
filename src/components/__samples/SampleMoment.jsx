import React from 'react'
import moment from "moment"

export default function SampleMoment() {
  return (
    <div className='App'>
        <h1>How to use moment</h1>
        <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
        <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
        <p>Today is {moment("2019-06-03T01:33:10+08:00").format("YYYY MM dd, HH:")}</p>
    </div>
  )
}
