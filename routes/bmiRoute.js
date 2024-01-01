const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//package for converting inches to cm
const IM = require("imperial-metric");

const router = express.Router();
const bmiHistory = [];

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "bmiCalculator.html"));
});

router.post("/", (req, res) => {
  console.log(req.body);
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  const age = parseFloat(req.body.age);
  const gender = parseFloat(req.body.gender);
  const units = parseFloat(req.body.units);
  //CALCULATOR LOGIC
  let bmi;
  if (units === 1) {
    height = IM(height).from('inch').to('cm');
    weight = weight / 2.205;
  }
  bmi = weight / Math.pow(height / 100, 2);
  bmi = bmi.toFixed(2);
  //ESTIMATE
  let estimate = "-";
  if (age > 20) {
    if (bmi <= 16) estimate = "Severe Thinness";
    else if (bmi <= 17) estimate = "Moderate Thinness";
    else if (bmi <= 18.5) estimate = "Mild Thinness";
    else if (bmi <= 25) estimate = "Normal";
    else if (bmi <= 30) estimate = "Overweight";
    else if (bmi <= 35) estimate = "Obese Class I";
    else if (bmi <= 40) estimate = "Obese Class II";
    else if (bmi > 40) estimate = "Obese Class III";
    else estimate = "-";
  } else {
    if (gender === 0) {
      if (bmi <= 19) estimate = "Underweight";
      else if (bmi <= 27) estimate = "Healthy weight";
      else if (bmi <= 31) estimate = "At risk of overweight";
      else if (bmi > 31) estimate = "Overweight";
      else estimate = "-";
    } else {
      if (bmi <= 17.8) estimate = "Underweight";
      else if (bmi <= 26.5) estimate = "Healthy weight";
      else if (bmi <= 32.5) estimate = "At risk of overweight";
      else if (bmi > 32.5) estimate = "Overweight";
      else estimate = "-";
    }
  }
  console.log("BMI: " + bmi);
  console.log("Estimate: " + estimate);
  bmiHistory.push({
    weight,
    height,
    age,
    gender,
    units,
    result: bmi,
    estimate : estimate,
    timestamp: new Date().toLocaleString()
  })

  res.json({ bmi: bmi, estimate: estimate });
});

router.get('/history', (req, res) => {
  // Send the entire history array as a JSON response
  res.json({ history: bmiHistory });
});

module.exports = router;
