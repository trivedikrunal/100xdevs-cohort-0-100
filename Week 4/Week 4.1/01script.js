function sumTwoNumber() {
    let a = document.getElementById('fValue').value;
    let b = document.getElementById('sValue').value;

    fetch(`http://localhost:8080/sum?a=${a}&b=${b}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(ans => {
            document.getElementById('showSum').innerHTML = `Sum is ${ans}`;
        })
        .catch(error => {
            document.getElementById('showSum').innerHTML = `Error: ${error.message}`;
        });
}
