$( document ).ready(function () {
    if ($(".work:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      let nb_hidden_boxes = $(".moreBox:hidden").length;
      if (!(nb_hidden_boxes)){
        $(".moreBox").slideUp();
        document.querySelector("#loadMore").innerHTML = "See more";
      }
      else if (nb_hidden_boxes > 3) {
        $(".moreBox:hidden").slice(0, 3).slideDown();
      }else{
        $(".moreBox:hidden").slice(0, nb_hidden_boxes).slideDown();
        document.querySelector("#loadMore").innerHTML = "Show less";
      }
    });

    $("#loadMoreCerts").on("click", (e)=>{
      e.preventDefault();
      let nb_hidden_boxes = $(".cert:hidden").length;
      if (!(nb_hidden_boxes)){
        $(".cert").slideUp();
        document.querySelector("#loadMoreCerts").innerHTML = "See more";
      }
      else if (nb_hidden_boxes > 3) {
        $(".cert:hidden").slice(0, 3).slideDown();
      }else{
        $(".cert:hidden").slice(0, nb_hidden_boxes).slideDown();
        document.querySelector("#loadMoreCerts").innerHTML = "Show less";
      }
    })

    $("#loadMoreBooks").on("click", (e)=>{
      e.preventDefault();
      let nb_hidden_boxes = $(".cert:hidden").length;
      if (!(nb_hidden_boxes)){
        $(".cert").slideUp();
        document.querySelector("#loadMoreCerts").innerHTML = "See more";
      }
      else if (nb_hidden_boxes > 3) {
        $(".cert:hidden").slice(0, 3).slideDown();
      }else{
        $(".cert:hidden").slice(0, nb_hidden_boxes).slideDown();
        document.querySelector("#loadMoreCerts").innerHTML = "Show less";
      }
    })

  });
  