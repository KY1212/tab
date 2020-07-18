$(function () {
    /*変数の設定*/
    const $tabs = $(".tabWrap .tabs"),
    $tab = $tabs.find('.tab'),
    $tabPanel = $(".tabPanel");

        $tab.click(function() {
        //アクティブタブのインデックス番号を取得
        const tabIndex = $(".tab").index(this)+1,
        //アクティブタブのインデックス番号をパネルに紐づけ
        $activeTab = $(`.tabPanel:nth-child(${tabIndex})`);
        //タブの処理
        $tab.removeClass("active"),
        $(this).addClass("active"),
        //パネルの処理
        $tabPanel.removeClass("active"),
        $activeTab.addClass("active");
    });

});

