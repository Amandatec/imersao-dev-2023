
function calculateReal () {
  var price = document.getElementById('price').value;
  var dolarAmount = document.getElementById('dolarAmount').value;

  price = parseFloat(price);
  dolarAmount = parseFloat(dolarAmount);
  result = price * dolarAmount;

  document.getElementById('result').innerHTML =  "Valor em reais R$: "+ result.toFixed(2);
}
