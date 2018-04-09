$("#buttons a").click(function() {
    var id = $(this).attr("id");
    $("#pages div").css("display", "none");
    $("#pages div#" + id + "").css("display", "block");
});
