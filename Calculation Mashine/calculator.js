let calculation = localStorage.getItem("calculation") || "";

function resetCalculator() {
    calculation = "";
    document.querySelector('.dispay').innerHTML = calculation;
    localStorage.setItem("calculation", calculation);
}
function chooseKey(choose) {
    document.querySelector('.dispay').innerHTML = choose;
    calculation += `${choose}`;
    document.querySelector('.dispay').innerHTML = calculation;
    localStorage.setItem("calculation", calculation);
}
function hadleSum() {
    let calculation = document.querySelector('.dispay').innerHTML;
    let result;
    try {
        result = eval(calculation);
        if (isNaN(result)) {
            result = 'Error';
        }
    } catch (error) {
        result = 'Error';
    }
    dispayResult(result);
}

function dispayResult(result) {
    console.log(result);
    document.querySelector('.dispay').innerHTML = result
    localStorage.setItem("calculation", result)
}