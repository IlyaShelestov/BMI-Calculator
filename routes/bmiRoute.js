const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "bmiCalculator.html"));
});

router.post("/", (req, res) => {
  console.log(req.body);
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const age = parseFloat(req.body.age);
  const gender = parseFloat(req.body.gender);
  const units = parseFloat(req.body.units);
  //CALCULATOR LOGIC
  let bmi;
  if (units === 0) {
    bmi = weight / Math.pow(height / 100, 2);
  } else {
    bmi = (weight / Math.pow(height, 2)) * 703;
  }
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
    else estimate = "Obese Class III";
  } else {
    if (gender === 0) {
      if (bmi <= 19) estimate = "Underweight";
      else if (bmi <= 27) estimate = "Healthy weight";
      else if (bmi <= 31) estimate = "At risk of overweight";
      else estimate = "Overweight";
    } else {
      if (bmi <= 17.8) estimate = "Underweight";
      else if (bmi <= 26.5) estimate = "Healthy weight";
      else if (bmi <= 32.5) estimate = "At risk of overweight";
      else estimate = "Overweight";
    }
  }
  console.log("BMI: " + bmi);
  console.log("Estimate: " + estimate);

  res.json({ bmi: bmi, estimate: estimate });
});

module.exports = router;
