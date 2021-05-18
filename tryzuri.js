
//function for converting Fahrenheit temperature to Celsius temperature
function convertFahrToCelsius(temp){
	let celsius = 0;
	if(isNaN(temp)){
		if(Array.isArray(temp)){
			return `[${temp}] is not a valid number but a/an array`;
		} else if((typeof temp) == 'object'){
			return `${JSON.stringify(temp)} is not a valid number but a/an ${typeof temp}`;
		} else {
			return `${temp} is not a valid number but a/an ${typeof temp}`;
		}
	} else {
		celsius = (temp - 32) * 5/9;
		return celsius.toFixed(4);
	}
}


//Function for checking yu gi oh
function checkYuGiOh(n){
  let output = []
  if(isNaN(n)){
    return `invalid parameter: ${n}`
  } else {
    for(let i = 1; i <= n; i++){
      let storeValue = [];
        if(i % 2 == 0){
            storeValue.push('yu')
          } 
        if(i % 3 == 0){
          storeValue.push('gi')
          }
        if(i % 5 == 0){
          storeValue.push('oh')
          } 
        if(storeValue.length > 0){
          output.push(storeValue.join("-"))
        } else {
          output.push(i)
        }
    }
    return output;
  }   
}


