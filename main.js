// random color on page load
$(document).ready(function() {
    var colors = ["#bb9772", "#838127", "#857D95", "darkgrey", "slategrey", "#8D774E", "#C49EA6", "#d7c6a4", "#716995", "#696969", "green", "#e4a850"];
    var rand = Math.floor(Math.random() * colors.length);
    document.documentElement.style.setProperty('--highlite-color', colors[rand]);


});
$(document).ready(function() {
    if (window.location.href.includes('archive')) {
        let replaceStringArchive = document.body.innerHTML.replace('<p class="toggleArchive">Archive:<br><a class="inner" href="./archive">2013-2019</a></p>', '<p class="toggleArchive"><a class="inner" href="./">Intro</a><br><br></p>');
        document.body.innerHTML = replaceStringArchive
    }
});

// caption toggle
$(document).ready(function() {
    $(".toggleDescription .projectTitle").click(function() {
        $(this).closest('.toggleDescription').find('.imageDescription').toggle();
        if ($('.imageDescription:visible').length() != 0) {
            $(this).closest('.toggleDescription').find('.imageDescription').removeClass("visible");
        } else {
            $(this).closest('.toggleDescription').find('.imageDescription').addClass("visible");

        }
    });

});

$(document).ready(function() {
    $('.projectTitle').each(function() {
        if ($(this).text() == "") {
            $(this).css("display", "none");
        }
    })
});