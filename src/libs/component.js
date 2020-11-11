import manImg from "../man.png";

export function hello() {
    const element = document.createElement("div");
    element.innerHTML = "hello webpack";
    element.classList.add("hello");
    return element;
}

export function man() {
    const element = document.createElement("img");
    element.src = manImg;
    return element;
}

export function footer() {
    const element = document.createElement("div");
    element.innerHTML = "footer is here";
    element.classList.add("footer");
    return element;
}
