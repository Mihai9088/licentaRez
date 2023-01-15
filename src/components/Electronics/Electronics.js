import React from 'react'
import ElectronicsSummary from './ElectronicsSummary'
import AvailableElectronics from './AvailableElectronics'
import { Fragment } from 'react'

const  Electronics = () => {
  return <Fragment>
    <ElectronicsSummary/>
    <AvailableElectronics/>
  </Fragment>
  
}

export default Electronics