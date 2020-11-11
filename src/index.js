import "./style.css";
import { hello, man } from "./libs/component.js";
// const { hello, man } = require("./libs/component.js");
// import $ from "jquery";

document.body.appendChild(hello());
document.body.appendChild(man());

// let count = 0;

// $("body").append('<button class="btn"> + </button>');
// $(".btn").on("click", () => {
//     count ++;
//     $("body").append(count);
// })

// if (module.hot) {
//     module.hot.accept("./libs/component.js", () => {
//         console.log('HMR');
//         $("body").append(hello());
        
//     })
// }