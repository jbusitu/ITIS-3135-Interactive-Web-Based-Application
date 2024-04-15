$(document).ready(function() {


    // preload the image for each link
    $("#image_list a").each(function () {
        var preloadImage = new Image();
        preloadImage.src = $(this).attr("href");
    })

    // set up the event handlers for each link
    $("#image_list a").click(function (evt) {

        // get the image URL and caption for each image and animate the caption
        var imageURL = $(this).attr("href");
        $("#image").fadeOut(3000, function () {
            $("#image").attr("src", imageURL).fadeIn(3000);
        });

        var caption = $(this).attr("title");
        $("#caption").fadeOut(3000, function () {
            $("#caption").text(caption).fadeIn(3000);
            $("#caption").animate({"font-size": "2em"},3000);
        });

        // cancel the default action of each link
        evt.preventDefault();
    });

    // move the focus to the first link
    $("li:first-child a").focus();
}); // end ready