import { DEMO_ACTION } from './actionTypes'
import { demoAPI } from '../../../api'

export const getDemo = (payload) => ({
  type: DEMO_ACTION,
  payload
})


export const getDemoAPI = (market, period) => {
  return (dispatch => {
    demoAPI.getCandlesByPeriodAPI(market, period)
      .then(res =>
        res && res.data && dispatch(getDemo(res.data))
      )
  })
}