$(document).ready(function() {

    // GET & SET
    $("#show-name").click(function() {
        $("#output").text($("#student-name").text());
    });

    $("#change-name").click(function() {
        $("#student-name").text("Sanchita Bajgain");
    });

    $("#show-bio").click(function() {
        $("#output").text($("#student-bio").html());
    });

    $("#get-input").click(function() {
        $("#output").text($("#nickname-input").val());
    });

    $("#set-input").click(function() {
        $("#nickname-input").val("jQuery Pro");
    });

    // CSS CLASSES
    $("#highlight-card").click(function() {
        $("#profile-card").addClass("highlighted");
    });

    $("#remove-highlight").click(function() {
        $("#profile-card").removeClass("highlighted");
    });

    $("#toggle-dark-mode").click(function() {
        $("#profile-card").toggleClass("dark-mode");
    });

    $("#toggle-rounded").click(function() {
        $("#profile-photo").toggleClass("rounded");
    });

    // CSS METHOD
    $("#red-bg").click(function() {
        $("#profile-card").css("background", "#e74c3c");
    });

    $("#reset-bg").click(function() {
        $("#profile-card").css("background", "white");
    });

    // HIDE & SHOW
    $("#hide-photo").click(function() {
        $("#profile-photo").hide("slow");
    });

    $("#show-photo").click(function() {
        $("#profile-photo").show("slow");
    });

    $("#toggle-bio").click(function() {
        $("#student-bio").toggle();
    });

    // FADE
    $("#fade-out-card").click(function() {
        $("#profile-card").fadeOut();
    });

    $("#fade-in-card").click(function() {
        $("#profile-card").fadeIn();
    });

    $("#fade-to-50").click(function() {
        $("#profile-card").fadeTo("slow", 0.5);
    });

    // SLIDE
    $("#slide-up-skills").click(function() {
        $("#skills-list").slideUp();
    });

    $("#slide-down-skills").click(function() {
        $("#skills-list").slideDown();
    });

    $("#slide-toggle-skills").click(function() {
        $("#skills-list").slideToggle();
    });

    // ANIMATE
    $("#animate-card").click(function() {
        $("#profile-card").animate({ "margin-left": "200px" }, 1000)
                          .animate({ "margin-left": "0px" }, 1000);
    });

    // EVENTS
    $("#profile-photo").mouseenter(function () {
        $(this).addClass("shadow");
    });
    $("#profile-photo").mouseleave(function () {
        $(this).removeClass("shadow"); 
    });

    $("#nickname-input").keypress(function(event) {
        $("#output").text("Key pressed: " + event.key);
    });
});