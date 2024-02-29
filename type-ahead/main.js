import "./style.css";
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//import { setupCounter } from './counter.js'

document.querySelector("#app").innerHTML = `
<form class="search-form">
    <input type="text" class="search" placeholder="City or State">
    <ul class="suggestions">
      <li>Filter for a city</li>
      <hr>
      <li>or a state</li>
    </ul>
  </form>
`;

//setupCounter(document.querySelector('#counter'))
