function load_more(element_class, btn_id){
  $("#"+btn_id).on('click', function (e) {
    e.preventDefault();
    let nb_hidden_boxes = $("."+ element_class + ":hidden").length;
    console.log(nb_hidden_boxes);
    if (!(nb_hidden_boxes)){
      $("."+ element_class).slideUp();
      document.querySelector("#"+btn_id).innerHTML = "See more";
    }
    else if (nb_hidden_boxes > 3) {
      $("."+ element_class + ":hidden").slice(0, 3).slideDown();
    }else{
      $("."+ element_class + ":hidden").slice(0, nb_hidden_boxes).slideDown();
      document.querySelector("#"+btn_id).innerHTML = "Show less";
    }
  });
}


$( document ).ready(function () {
    load_more("moreBox", "loadMore");
    
    load_more("cert", "loadMoreCerts");

    load_more("tk", "loadMoreTechBooks");

    load_more("ntk", "loadMoreNonTechBooks");
    
    load_more("cp_comp", "loadMoreCP");
    
    load_more("ds_comp", "loadMoreDS");

    load_more("ctf_comp", "loadMoreCTF");

    load_more("clubs", "loadMoreClubs");

  });
  