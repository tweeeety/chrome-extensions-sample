console.log("popup.js global");
$(function(){
  console.log("popup.js ready");
  $(".content-ok").on("click", function(){
    console.log("button is clicked");
  });
});
