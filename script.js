import { getData } from "./script/getDatabase.js";
import { addElement } from "./script/add.js";
import { createExistingCard } from "/script/createExistingCard.js";
import { deleteEvent } from "./script/delete.js";
deleteEvent();
getData();
addElement();
createExistingCard();
