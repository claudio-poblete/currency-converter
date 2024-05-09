import { updateAmountDisplay, renderChart, updateCurrencySymbol, initAmountInput, renderCurrencyOptions } from './ui.js'
import { convertToCurrency, getVariationForCurrency } from './conversion.js'

document.addEventListener('DOMContentLoaded', () => {
  const convertButton = document.querySelector('#convert-button')
  const amountInput = document.querySelector('#amount-input')
  const currencySelect = document.querySelector('#currency')

  renderCurrencyOptions()

  convertButton.addEventListener('click', async () => {
    const amount = parseFloat(amountInput.value)
    const selectedCurrency = currencySelect.value

    if (isNaN(amount) || amount <= 0) {
      alert('Por favor, ingresa un monto válido')
      return
    }

    try {
      const convertedAmount = await convertToCurrency(amount, selectedCurrency)
      updateAmountDisplay(convertedAmount)

      const variationData = await getVariationForCurrency(selectedCurrency)
      renderChart(variationData)

      const labels = variationData.labels.map(date => {
        const formattedDate = new Date(date);
        return formattedDate.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });
      })

      renderChart({ variation: variationData.variation, labels })

      let currencySymbol
      if (selectedCurrency === 'Dolar') {
        currencySymbol = '$'
      } else if (selectedCurrency === 'UF') {
        currencySymbol = '$'
      } else {
        currencySymbol = '€'
      }
      updateCurrencySymbol(currencySymbol)

    } catch (error) {
      console.error(`Error al convertir a ${selectedCurrency}`, error)
      alert(`Hubo un error al convertir a ${selectedCurrency}. Por favor, intenta de nuevo más tarde`)
    }
  })

  initAmountInput()

})
