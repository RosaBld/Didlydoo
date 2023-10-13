import { add } from "./script/add.js";

import { getData } from "./getDatabase.js";

const main = document.querySelector("main");

const card = document.createElement("div");
card.classList.add("card");
main.appendChild(card);
