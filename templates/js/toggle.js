function toggle_visibility(id) {
    var e = document.getElementById(id);
    console.log(e);
    console.log("display : "+e.style.display);
    if(e.style.display == "block")
        e.style.display = "none";
    else
        e.style.display = "block";
    console.log("after_display : "+e.style.display);
}