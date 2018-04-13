function showprojectsgroup() {
    document.getElementById('projectsgroup').style.display = "block";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "none";
    document.getElementById('projectsbutton').style.color = "blue";
    document.getElementById('coursesbutton').style.color = "black";
    document.getElementById('aboutbutton').style.color = "black";
}

function showcoursesgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "block";
    document.getElementById('aboutgroup').style.display = "none";
    document.getElementById('projectsbutton').style.color = "black";
    document.getElementById('coursesbutton').style.color = "blue";
    document.getElementById('aboutbutton').style.color = "black";
}

function showaboutgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "block";
    document.getElementById('projectsbutton').style.color = "black";
    document.getElementById('coursesbutton').style.color = "black";
    document.getElementById('aboutbutton').style.color = "blue";
}
