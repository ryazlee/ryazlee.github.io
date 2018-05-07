function myFunction(x) {     
    if (x.matches) { // If media query matches
        document.getElementById('ppimagecontainer').style.float = "none";
        document.getElementById('ppimagecontainer').style.width = "100%";
        document.getElementById('ppimage').style.width = "50%";
        document.getElementById('scrollablewindow').style.width = "90%";
        document.getElementById('scrollablewindow').style.margin = "auto";
        document.getElementById('scrollablewindow').style.float= "none";
        document.getElementById('scrollablewindow').style.marginBottom= "5vh";
        document.getElementById('connectlinks').style.width = "90%";
        document.getElementById('connectlinks').style.float= "none";       
        document.getElementById('connectlinks').style.margin= "auto";
    } else {
        document.getElementById('ppimagecontainer').style.float = "left";
        document.getElementById('ppimagecontainer').style.width = "45%";
        document.getElementById('ppimage').style.width = "25vw";
        document.getElementById('scrollablewindow').style.width = "50%";
        document.getElementById('scrollablewindow').style.marginRight = "4%";
        document.getElementById('scrollablewindow').style.marginBottom= "0%";
        document.getElementById('connectlinks').style.width = "45%";
        document.getElementById('connectlinks').style.float= "left";
        document.getElementById('connectlinks').style.marginTop= "-11%";
    }
}

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

