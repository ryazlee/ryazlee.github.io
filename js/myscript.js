function showprojectsgroup() {
    document.getElementById('projectsgroup').style.display = "block";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "none";
}

function showcoursesgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "block";
    document.getElementById('aboutgroup').style.display = "none";
}

function showaboutgroup() {
    document.getElementById('projectsgroup').style.display = "none";
    document.getElementById('coursesgroup').style.display = "none";
    document.getElementById('aboutgroup').style.display = "block";
}
