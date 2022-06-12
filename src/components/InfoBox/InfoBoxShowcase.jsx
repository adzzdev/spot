import React from 'react'
import InfoBox from './InfoBox'

export default function InfoBoxShowcase() {
  return (
    <div className='container-fluid mt-4'>
      <div className='row'>
        <div className='col-12'>
          <h1>Info Boxes</h1>
        </div>

        <div className='col-12 mt-4'>
          <p >Default Info Boxes</p>
          <div className='row'>
            <div className='col-lg-3'>
              <InfoBox dataLabel="Active Users" dataText={"1312"} iconBGClass={"bg-primary"} iconClass={"bi bi-person"}></InfoBox>
            </div>
            <div className='col-lg-3'>
              <InfoBox  dataLabel="Posts" dataText={"400"} iconBGClass={"bg-warning"} iconClass={"bi bi-sticky"}></InfoBox>
            </div>
            <div className='col-lg-3'>
              <InfoBox dataLabel="Revenue" dataText={"$4000.00"} iconBGClass={"bg-success"} iconClass={"bi bi-cash-stack"}></InfoBox>
            </div>
            <div className='col-lg-3'>
              <InfoBox></InfoBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
