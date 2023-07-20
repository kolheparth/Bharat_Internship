function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitInput = document.getElementById("unitInput").value;
    const resultElement = document.getElementById("result");

    if (unitInput === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        resultElement.textContent = `${temperatureInput} °C is equal to ${fahrenheit.toFixed(2)} °F.`;
    } else if (unitInput === "fahrenheit") {
        const celsius = (temperatureInput - 32) * 5/9;
        resultElement.textContent = `${temperatureInput} °F is equal to ${celsius.toFixed(2)} °C.`;
    }
}
