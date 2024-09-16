// Normal Aproch
// function getAnimalData() {
//     fetch('https://fakerapi.it/api/v1/persons').then(function (response) {
//         response.json().then(function (finalData) {
//             console.log(finalData);
//         })
//     })
// }

// Await and async using
async function getAnimalData() {
    const response = await fetch('https://fakerapi.it/api/v1/persons');
    const finalData = await response.json();
    document.querySelector('.dataShow').innerHTML = JSON.stringify(finalData.data);
}