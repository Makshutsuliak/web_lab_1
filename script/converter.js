document.getElementById('conversionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let unitFrom = document.getElementById('unitFrom').value;
    let unitTo = document.getElementById('unitTo').value;
    
    let result = convert(inputValue, unitFrom, unitTo);
    
    document.getElementById('result').innerHTML = result;
  });
  
  function convert(value, from, to) {
    let units = {
      'km': 1000,
      'm': 1,
      'dm': 0.1,
      'cm': 0.01,      
      'mm': 0.001
    };
    
    var result = value * units[from] / units[to];
    return result.toFixed(1) + ' ' + to;
  }
  