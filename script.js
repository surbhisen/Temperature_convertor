const calculateTemp = () => {
  
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('select');
    const valueTemp =  select.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const fahToCel = (fah) => {
        
         let celcius = Math.round((fah - 32) * 5/9);
         return celcius;
    }

    let res;

    if (valueTemp == 'cel') {
        res = celToFah(numberTemp);
        document.getElementById('result').innerHTML = `Result : ${res}° F`;
    }
    else {
        res = fahToCel(numberTemp);
        document.getElementById('result').innerHTML = `Result : ${res}° C`;
    }
}