$(function () {
    /*変数の設定*/
    const $tabs = $(".tabWrap .tabs"),
    $tab = $tabs.find('.tab'),
    $tabPanel = $(".tabPanel"),
    duration = 200;

        //クリック後の処理
        $tab.click(function() {
        //アクティブタブのインデックス番号を取得
        const tabIndex = $(".tab").index(this)+1,
        //アクティブタブのインデックス番号をパネルに紐づけ
        $activeTab = $(`.tabPanel:nth-child(${tabIndex})`);
        $tab.removeClass("active"),

        // $(this).animate({
        //     height: 65 + "px",
        //     lineHeight: 65 + "px"
        // },duration);

        $(this).addClass("active"),
        $tabPanel.removeClass("active"),
        $activeTab.addClass("active");
    });

    // //ホバー時の処理
    // $tab.hover(
    //     function(){  //監視
    //         $(this).animate({
    //             height: 65 + "px",
    //             lineHeight: 65 + "px"
    //         },duration);
    //     },
    //     function(){  //監視
    //         if($(this).hasClass("active")){
    //             return;
    //         }else{
    //             $tab.removeClass("active");

    //             $(this).animate({
    //                 height: 60 + "px",
    //                 lineHeight: 60 + "px"
    //             },duration);
    //         }
    //     }
    // );
});

