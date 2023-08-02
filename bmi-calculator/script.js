'use strict';

const formEl = document.querySelector('.form');
const bmiEl = document.querySelector('.bmi');
const weightConditionEl = document.querySelector('.weight-condition');

const weightCondition = function (bmi) {
  if (bmi < 16) {
    return 'Severely Underweight';
  } else if (bmi >= 16 && bmi <= 18.4) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'Overweight';
  } else if (bmi >= 30 && bmi <= 34.9) {
    return 'Moderately Obese';
  } else if (bmi >= 35 && bmi <= 39.9) {
    return 'Severely Obese';
  } else if (bmi >= 40) {
    return 'Morbidly Obese';
  }
};

formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = Number(formEl.height.value) / 100;
  const weight = Number(formEl.weight.value);
  const bmi = (weight / height ** 2).toFixed(2);
  bmiEl.textContent = `BMI: ${bmi}`;
  weightConditionEl.textContent = `Weight Condition: ${weightCondition(bmi)}`;
});
