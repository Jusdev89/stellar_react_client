import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from 'muicss/lib/react/button'

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <div className="mui-container-fluid">
    <div className="mui-row">
      <h3>Create Account</h3>
      <div className="mui-col-md-4">
        <span className="badge">1. </span>
        <button className="mui-btn mui-btn--raised mui-btn--primary" id="generateKey">Generate Key Pair</button>
      </div>
      <div id="generatedKeys"></div>
      <div className="mui-col-md-4">
        <span className="badge">2. </span>
        <button className="mui-btn mui-btn--raised" id="createAccount">Create Account</button>
      </div>
      <div id="createResponse"></div>
    </div>
    <div className="col-md-4 col-xs-12 section">
      <h3>View Account</h3>
    </div>
    <div className="col-md-4 col-xs-12 section">
      <h3>Send Payment</h3>
    </div>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
