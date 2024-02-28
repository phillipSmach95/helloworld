import "./BMI.css";

import { useState } from "react";

function BMI() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);
  const [male, isMale] = useState(true);
  const [female, isFemale] = useState(false);
  const [sex, setSex] = useState("Male");
  const [health, setHealth] = useState("");
  const isToggled = () => {
    isFemale(!female);
    isMale(!male);
    if(male){
      setSex('Male')
    }else if(female){
      setSex('Female')
    }
  };

  function calculateBMI(weight, height, male, female) {
    const BMI = weight / ((height / 100) * (height / 100));
    if (male) {
      if (BMI <= 20) {
        setHealth("Underweight");
      } else if (BMI >= 25) {
        setHealth("Overweight");
      } else {
        setHealth("Healthy");
      }
    }
    if (female) {
      if (BMI <= 18.5) {
        setHealth("Underweight");
      } else if (BMI >= 24.9) {
        setHealth("Overweight");
      } else {
        setHealth("Healthy");
      }
    }
    setResult(BMI);
  }
  return (
    <>
      <label htmlFor="weight">weight (kg): </label>
      <input
        type="number"
        name="weight"
        id="weight"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <label htmlFor="height">heigth (cm): </label>
      <input
        type="number"
        name="height"
        id="height"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      {/* <label htmlFor="male">male {male.toString()}</label> */}
      <button type="radio" id="male" onClick={() => isToggled()}>change sex</button>
      <button onClick={() => calculateBMI(weight, height, male, female)}>
        Calculate
      </button>
      <p>
        your BMI is {result} you are a {health} {sex}
      </p>
    </>
  );
}

export default BMI;
