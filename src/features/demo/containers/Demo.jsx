import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {getDemoAPI} from '../../../redux/reducers/demo'


const Demo = ({ getDemoAPI,demo, ...props }) => {
  useEffect(() => {
    getDemoAPI('LTC_BTC','Day');
  }, [])

  return (
    <div>{demo.data.map(v => {
      return (
        <p>{v.market}</p>)
    })}
      DemoPage1234</div>
  )
}

const mapDispatchToProps = {
  getDemoAPI
}
const mapStateToProps = (state) => ({
  demo: state.demo
})


export default connect(mapStateToProps, mapDispatchToProps)(Demo)