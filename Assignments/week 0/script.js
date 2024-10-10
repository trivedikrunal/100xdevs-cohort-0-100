document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    const capital = parseFloat(document.getElementById('capital').value);
    const years = parseInt(document.getElementById('years').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100;

    // Calculate future value
    const futureValue = capital * Math.pow((1 + interest), years);

    // Display output
    document.getElementById('output').innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
});
