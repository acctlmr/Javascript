const calculateBtn = document.querySelector('#calculate_bmi');

const bmiResults = document.querySelector('#bmi_result');

const form = document.querySelector('form');

calculateBtn.addEventListener('click', (e) => {
    const weight = document.querySelector('#weightField').value;
    const height = document.querySelector('#heightField').value;
    
    if (weight === '' || height === '') {
        return alert('Please enter height and weight both.');
    }

    const result = weight / (height * height);
    
    let bmiMsg = '';
    let msgColor = 'text-danger';
    if (result < 18.5) {
        bmiMsg = 'Thinness';
    } else if (result >= 18.5 && result < 25) {
        bmiMsg = 'Normal';
        msgColor = 'text-success';
    } else if (result > 30.0) {
        bmiMsg = 'Obese';
    }

    bmiResults.innerHTML = `<p id="bmi_result">
    
    BMI=<strong>${Math.round(result*100)/100}</strong>
    <span class="${msgColor}"><strong>${bmiMsg}</strong></span>
    </p>`;
});

form.addEventListener('submit', e => {
    e.preventDefault();
});

