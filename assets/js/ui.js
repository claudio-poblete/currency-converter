const updateAmountDisplay = (amount) =>{
  document.querySelector('#show-currency').textContent = amount.toFixed(2)
}

const renderCurrencyOptions = () =>{
  const currencySelect = document.querySelector('#currency')
  const currencies = ['Dolar', 'UF', 'Euro']
  currencies.forEach(currency => {
    const option = document.createElement('option')
    option.value = currency
    option.textContent = currency
    currencySelect.appendChild(option)
  })
}

const renderChart = (data) =>{
  const graphicCanvas = document.querySelector('#graphic')
  const ctx = graphicCanvas.getContext('2d')

  if (graphicCanvas) {
    const existingChart = Chart.getChart(graphicCanvas)
    if (existingChart) {
      existingChart.destroy()
    }
  }

  ctx.clearRect(0, 0, graphicCanvas.width, graphicCanvas.height)

  new Chart(ctx,{
    type: 'line',
    data: {
      labels: data.labels.reverse(),
      datasets: [{
        label: 'Variación de la moneda',
        data: data.variation,
        borderColor: '#8CD454',
        backgroundColor: 'rgba(140, 212, 84, 0.2)',
        borderWidth: 2
      }]
    },
    options:{
      responsive: true,
      maintainAspectRatio: false,
      scales:{
        x: { grid: { display: false } },
        y: { grid: { color: '#F9F7F7' } }
      }
    }
  })
}


const updateCurrencySymbol = (symbol) =>{
  document.querySelector('#currency-symbol').textContent = symbol
}

const initAmountInput = () =>{
  const amountInput = document.querySelector('#amount-input')

  amountInput.addEventListener('input', ()=>{
    if (amountInput.value.startsWith('0') && amountInput.value.length > 1) {
      amountInput.value = amountInput.value.replace(/^0+/, '')
    } else if (amountInput.value.length > 10) {
      amountInput.value = amountInput.value.slice(0, 10)
    }
    document.querySelector('#show-amount').textContent = amountInput.value
  })
}

export {updateAmountDisplay, renderCurrencyOptions, renderChart, updateCurrencySymbol, initAmountInput}