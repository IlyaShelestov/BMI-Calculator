# BMI-Calculator

This project serves as the first assignment for the **WEB Technologies 2** course at **Astana IT University**.

## Dependencies
Before installing this application, ensure that you have **GitBash**, **Node.js**, and **Node Package Manager** installed on your machine.

## Installation 

1. Create a *folder* where you want to install this project.
2. Open the created *folder* with **GitBash**.
3. Use the following commands in **GitBash** to download the project:
```
git clone https://github.com/ilyaShelestov/BMI-Calculator
cd BMI-Calculator
```
4. Start the server with:
```
npm start
```
5. The server runs on **port 3000**. Open the project in your browser by navigating to **localhost:3000**.

After completing these steps, you will land on the **Home Page**.

To view the project, navigate to the *"Calculator"* tab, or visit **localhost:3000/bmicalculator**.

To access the BMI calculation history, either click the *"History"* button in *"Result"* section or navigate to **localhost:3000/bmicalculator/history**

## Additional Information

The application is designed with a clean and responsive layout, incorporating **Bootstrap** for styling. Users can input their weight, height, age, choose their gender, and select the preferred units for weight and height. The BMI calculation logic is implemented on the server side using **Express.js**, ensuring accurate and efficient results.

Additional packages utilized: **body-parser**, **imperial-metric**. You can find them at *https://www.npmjs.com/*.