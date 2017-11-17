
    div {
        width: 100px;
        height: 100px;
        background-color: red;
        position: relative;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

/* Standard syntax */
    @keyframes example {
        0%   {background-color:red; left:0px; top:0px;}
        25%  {background-color:yellow; left:95%; top:0px;}
        50%  {background-color:blue; left:95%; top:300px;}
        75%  {background-color:green; left:0px; top:300px;}
        100% {background-color:red; left:0px; top:0px;}
    }
 
