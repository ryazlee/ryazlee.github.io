function showprojectsgroup() {
    document.getElementById('projectsgroup').style.display = "block";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "none";
    document.getElementById('coursesbutton').style.color = "black";
    document.getElementById('aboutbutton').style.color = "black";
    document.getElementById('projectsbutton').style.fontWeight = 900;
    document.getElementById('aboutbutton').style.fontWeight = "initial";
    document.getElementById('coursesbutton').style.fontWeight = "initial";
}

function showcoursesgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "block";
    document.getElementById('aboutgroup').style.display = "none";
    document.getElementById('projectsbutton').style.color = "black";
    document.getElementById('coursesbutton').style.fontWeight = 900;
    document.getElementById('projectsbutton').style.fontWeight = "initial";
    document.getElementById('aboutbutton').style.fontWeight = "initial";
}

function showaboutgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "block";
    document.getElementById('aboutbutton').style.fontWeight = 900;
    document.getElementById('coursesbutton').style.fontWeight = "initial";
    document.getElementById('projectsbutton').style.fontWeight = "initial";

}

function onload(){
    document.getElementById('projectsbutton').style.color = "black";
    document.getElementById('coursesbutton').style.color = "black";
    document.getElementById('aboutbutton').style.color = "black";
    document.getElementById('aboutbutton').style.fontWeight = 900;
}

function changetorotate() {
    document.getElementById("ppimage").className = "rotatingimage";
}

function stoprotate() {
    document.getElementById("ppimage").className = "initial";
}
