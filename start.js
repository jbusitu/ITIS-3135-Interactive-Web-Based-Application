$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "group.json",
        beforeSend: function () {
            $("#group").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#group").html("");
            $.each(data, function () {
                $.each(this, function (key, value) {
                    //var xmlDoc = $(this);
                    $("#group").append(
                        "<h3>" + value.name + "</h3>" +
                        value.title + "<br>" +
                        value.bio + "<br>"
                    );
                });
            });
        }
    });
});