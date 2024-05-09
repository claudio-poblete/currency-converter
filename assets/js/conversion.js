import { fetchData } from './api.js'

const convertToCurrency = async (amount, currency) => {
  try {
    const exchangeRate = await getExchangeRate(currency)
    const convertedAmount = amount / exchangeRate
    return convertedAmount
  } catch (error) {
    throw new Error(`Error al convertir a ${currency}`)
  }
}

const getExchangeRate = async (currency) => {
  try {
    const data = await fetchData(currency.toLowerCase())
    const exchangeRate = data.serie[0].valor
    return exchangeRate
  } catch (error) {
    throw new Error(`Error al obtener la tasa de cambio de ${currency}`)
  }
}

const getVariationForCurrency = async (currency) => {
  try {
    const data = await fetchData(currency.toLowerCase())
    const variation = data.serie.slice(0, 10).map(entry => entry.valor)
    const labels = data.serie.slice(0, 10).map(entry => entry.fecha)
    return { variation: variation.reverse(), labels: labels.reverse() }
  } catch (error) {
    throw new Error(`Error al obtener la variación de ${currency}`)
  }
}


export { convertToCurrency, getExchangeRate, getVariationForCurrency }
