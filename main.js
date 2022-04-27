const advice = document.querySelector('.advice');
const adviceId = document.querySelector('.adviceId');


const fetchDataFromAPI = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            advice.innerHTML = `"` + data.slip.advice + `"`;
            adviceId.innerHTML = "#" + data.slip.id;
        }
        );
}
const button = document.querySelector('.button').addEventListener('click', fetchDataFromAPI);

