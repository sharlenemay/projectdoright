import axios from "axios";
const api = require("../db/data");
const errors = document.querySelector(".errors");
const loading = document.querySelector(".loading");
const results = document.querySelector(".result-container");
const companyName = document.querySelector(".companyName");
const joeStatus =  document.querySelector(".joeStatus");
const summary = document.querySelector(".summary");
const findOutMore = document.querySelector(".findOutMore");
r
esults.style.display = "none";
loading.style.display = "none";
errors.textContent = "";


const btn = document.getElementById('btn');
btn.onclick = function() {
    console.log('Data >>', window.location);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log('Data >>', tabs);
    })
}

