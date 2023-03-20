// var newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);
$("body").append("<p>Это новый параграф</p>");

for (var i = 0; i < 3; i++) {
    var hobby = prompt("Назови одно из своих хобби!");
    $("body").append("<p>" + hobby + "</p>");
}