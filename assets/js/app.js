let amount = document.querySelector('#amount-input')

amount.addEventListener('input', () => {
  let amount = document.querySelector('#amount-input').value
  let number = amount.replace(/^0+/, "")
  if( number < 0){
    alert('Ingresa un monto válido, por favor')
    let showAmount = document.querySelector('#show-amount')
    showAmount.innerHTML = '0'
  }else{
    let showAmount = document.querySelector('#show-amount')
    showAmount.innerHTML = number
  }
})