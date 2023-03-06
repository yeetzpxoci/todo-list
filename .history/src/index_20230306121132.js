import {defaultProject} from "./app_logic";
import { renderHTML } from "./DOM";

document.onclick = function (e) {
    if (e.target.className !== "description-div") {
        document.getElementsByClassName("description-div").style.display = "none";
    }
};

renderHTML(defaultProject);