const calculateTemp = () => {

  const numberTemp = document.getElementById("temp").value;

  const tempSelected = document.getElementById("temp_diff");
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round(((cel/5) * 9 + 32) * 100)/100;
    return fahrenheit;
  }

  const fahToCel = (fah) => {
    let celcius = Math.round((((fah - 32) * 5) / 9) * 100)/100;
    return celcius;
  }

  let result;

  if(valueTemp == "cel") {
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} degrees Fahrenheit`;
  } else {
    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result} degrees Celcius`;
  }



}