$( document ).ready(function () {
    if ($(".work:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 6).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        document.querySelector("#loadMore").innerHTML = "Show less";
      }
    });
  });