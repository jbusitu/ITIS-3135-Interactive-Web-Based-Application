$(document).ready(function() {
    //on click function
    $("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
        var fileName = "json_file/" + title + ".json";

        console.log(fileName);

        $.get(fileName, function(data) {
            $("main h1").html(data.speakers[0].title)
            $("main img").attr("src", data.speakers[0].image)
            $("main p").html(data.speakers[0].text)
            $("main h2").html(data.speakers[0].speaker)
        });
    });

}); // end ready