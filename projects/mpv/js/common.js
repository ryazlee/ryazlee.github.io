var highlightcolor="#fc3";
var ns6=document.getElementById&&!document.all;
var previous='';
var eventobj;

// SET FOCUS TO FIRST ELEMENT AND HIDE/SHOW ELEMENTS IF JAVASCRIPT ENABLED

// REGULAR EXPRESSION TO HIGHLIGHT ONLY FORM ELEMENTS
var intended=/INPUT|TEXTAREA|SELECT|OPTION/

// FUNCTION TO CHECK WHETHER ELEMENT CLICKED IS FORM ELEMENT
function checkel(which){
    if (which.style && intended.test(which.tagName)){return true}
    else return false
}

// FUNCTION TO HIGHLIGHT FORM ELEMENT
function highlight(e){
    if(!ns6){
        eventobj=event.srcElement
        if (previous!=''){
            if (checkel(previous))
            previous.style.backgroundColor=''
            previous=eventobj
            if (checkel(eventobj)) eventobj.style.backgroundColor=highlightcolor
        }
        else {
            if (checkel(eventobj)) eventobj.style.backgroundColor=highlightcolor
            previous=eventobj
        }
    }
}

// Function to check CalNet ID for all numeric.
function checkId() {
    if (window.location.search && unescape(window.location.search).match(/bpr.calnet.berkeley.edu\/account-manager/)) {
        return;
    }
    calnet_id = document.getElementById("username");
    calnet_id.value = calnet_id.value.replace(/^\s+|\s+$/g,""); // trim leading and trailing spaces
    if (calnet_id != null) {
        if (calnet_id.value.match(/^(cads)?\d+$/ )) {
            message = "You are now required to choose a self-selected CalNet ID before continuing. Click OK to log into the Change CalNet ID application.";
            answer = alert(message);
            window.location = "https://bpr.calnet.berkeley.edu/account-manager/person/changeCalnetId";
            return false;
        }
    }
}
