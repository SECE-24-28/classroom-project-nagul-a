
// console.log("Start");
// for (let i = 0; i < 1e9; i++) {
//   console.log("Hello  world");
// }
// console.log("End");

//Syncronous

// console.log("Before");

// setTimeout(() => {
//   console.log("SAMPLE _TEXT");
// }, 5000);
// console.log("After");
// Basic fetch example

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     console.log(users); // Array of user objects
//   })
//   .catch(error => console.error('Error:', error));

//import axios from "axios";


// async function fetchApi() {
//   const response = await axios("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
//   console.log("The user:", response);
// }
// fetchApi();
// Example using fetch in JavaScript
// import fetch from "node-fetch";

// const query = `
//   query getUserProfile($username: String!) {
//     matchedUser(username: $username) {
//       username
//       profile {
//         realName
//         countryName
//         ranking
//       }
//     }
//   }
// `;

// fetch("https://leetcode.com/graphql", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     // You need to include authentication headers/cookies here
//   },
//   body: JSON.stringify({
//     query,
//     variables: { username: "mugesh19" }
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

async function fetchMultipleApis() {
  let urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/users",
  ];
  let promises = urls.map((item) => fetch(item).then((res) => res.json()));
  let data = await Promise.all(promises);
  console.log("The data is printed:", data);

  //   console.log("Promises:", promises);
}

fetchMultipleApis();