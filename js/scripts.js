//Business Logic
//$("#links").load("/https://www.rottentomatoes.com/");





//Front End Logic
$(document).ready(function(){
  $(".table").hide();
  $("form#rotten").submit(function(event){
    event.preventDefault();
    $("td").remove();
    $(".output-table").show();
    $("#rotten").hide();
    var movieInput = $("input#movie-name").val();
    var movieRelease = $("input#movie-release").val();
    var movieScore = $("input#movie-score").val();

    // $(".table").hide();
  $(".output-table").append("<td>" + movieInput + "</td>" + "<td>" + movieRelease + "</td>" + "<td>" + movieScore + "</td>");

  $("#more-forms").submit(function(event){
    event.preventDefault();
    $("td").remove();
    $(".output-table").show();
    $("#rotten").hide();
    var movieInput = $("input#movie-name").val();
    var movieRelease = $("input#movie-release").val();
    var movieScore = $("input#movie-score").val();

    // $(".table").hide();
  $(".output-table").append("<td>" + movieInput + "</td>" + "<td>" + movieRelease + "</td>" + "<td>" + movieScore + "</td>");


  });
  //
  // $(".contact").last().click(function(){
  //   $(".table").show();
  //   $("#show-contact h2").text(newContact.firstName);
  //   $(".first-name").text(newContact.firstName);
  //   $(".last-name").text(newContact.lastName);
  //   $("ul#addresses").text("");
  //   newContact.address.forEach(function(address) {
  //   $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
  //   });

});
