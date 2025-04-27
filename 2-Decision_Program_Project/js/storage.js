// storage.js - localStorage işlemlerini, localStorage'e kaydetme işlemini yapar. 

import { getCurrentDateTime } from "./utils/date.js";

let _options = JSON.parse(localStorage.getItem("options")) || [];
let _history = JSON.parse(localStorage.getItem("history")) || [];

export function getOptions() {
  return _options;
}

export function saveOptions() {
  localStorage.setItem("options", JSON.stringify(_options));
}

export function addToHistory(option) {
  const record = {
    text: option,
    date: getCurrentDateTime()
  };
  _history.push(record);
  localStorage.setItem("history", JSON.stringify(_history));
}

export function getHistory() {
  return _history;
}
