$(function() {

  var duration = 600;

  //初期表示タブ
  $(".tabNav .tabPanel:nth(0)").addClass("show");

  //カーソルを載せた時、丸いアイコンをアニメーションさせる
  $("li").on("mouseover", function(){
    var index = $("li.act").index(this)+1;
    // alert('indexの値=' + index);
    $("li:nth-child(" +index+ ") .icon").stop(true).animate({
      width: "32px",
      height: "32px",
      lineHeight: "32px"
    },duration,"easeOutElastic");

    $("li").on("mouseout", function(){
      $("li:nth-child(" +index+ ") .icon").stop(true).animate({
      width: "27px",
      height: "27px",
      lineHeight: "27px"
    },duration,"easeOutElastic");

    });
  });

  //クリックした時の処理
  $(".tab li").click(function() {
    var index = $(".tab li").index(this);
    $(".tab li").removeClass("active");
    $(this).addClass("active");
    $(".tabNav div").removeClass("show").eq(index).addClass("show");
    $('.tab li').find(".icon").removeClass(".icon");
  });

});