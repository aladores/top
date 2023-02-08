const convertToCelsius = function(fahrenheit) {
  let celsius=0;
  celsius = ((fahrenheit-32) * (5/9));
 
  if (celsius == 0){
    return 0;
  }
  else {
    celsius = celsius.toFixed(1);
    console.log(celsius)
    return Number(celsius);
  }
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit=0;
  fahrenheit = ((celsius* (9/5)) + 32);
  
  if (fahrenheit == 32){
    return 32;
  }
  else {
    fahrenheit = fahrenheit.toFixed(1);
    console.log(fahrenheit)
    return Number(fahrenheit);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
