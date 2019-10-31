import makeRequest from './config/makeRequest'

export const getCandlesByPeriodAPI = (market, period) => {
  return makeRequest('get', `/Candles/${market}/${period}`)
};
