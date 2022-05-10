$(function () {
    //ハンバーガーボタンを $triggerに格納
    const $trigger = $('#hamburger');
    // メニューアイテムを $menutriggerに格納
    const $menutrigger = $('#gnav__list');
    //グロナビを $gnavに格納
    const $gnav = $('#gnav');
    //ヘッダーのブレイクポイントを point_headerに格納
    const point_header = window.matchMedia('screen and (min-width: 768px)');

    //ハンバーガーメニューボタンがクリックされた時
    $trigger.on('click', function () {
        //aria-expandedの値を変数expandedに格納
        const expanded = $(this).attr('aria-expanded');

        //もし expanded が 'false'だったら（メニューが非表示・開く操作）
        //【重要】ariaの値はbooleanではなく文字列なので評価式の記述が変わります
        if (expanded === 'false') {
            //対象メニューの展開ステートをtrueにし、labelを「閉じる」に変更
            $(this).attr('aria-expanded', true).attr('aria-label', 'メニューを閉じる');
            //メニューのhiddenステートをfalseにしてメニューを表示
            $gnav.attr('aria-hidden', false).slideDown();

            //もし expanded が 'true'だったら（メニューが展開済・閉じる操作）
        } else {
            //対象メニューの展開ステートをfalseにし、labelを「開く」に変更
            $(this).attr('aria-expanded', false).attr('aria-label', 'メニューを開く');
            //メニューのhiddenステートをtrueにしてメニューを閉じる
            $gnav.attr('aria-hidden', true).slideUp();
        }
    });

    // メニューリストがクリックされた時
    $menutrigger.on('click', function () {
        if (point_header.matches) {
            $gnav.attr('aria-hidden', false).show();
        } else {
            //対象メニューの展開ステートをfalseにし、labelを「開く」に変更
            $trigger.attr('aria-expanded', false).attr('aria-label', 'メニューを開く');
            //メニューのhiddenステートをtrueにしてメニューを閉じる
            $gnav.attr('aria-hidden', true).slideUp();
        }
    });

    //ブレイクポイントをまたいだときの挙動
    //今回のグロナビはPC/SPソース共有なので、ブレイクポイントをまたいだ時にaria属性も動的に設定する必要がある。ハンバーガーはSPレイアウト時しか表示されないので768px以上の場合の処理は不要
    function checkBreakPoint() {
        //もし768px以上だったら
        if (point_header.matches) {
            //グロナビを表示
            $gnav.attr('aria-hidden', false).show();
        } else {
            //スマホレイアウトの初期状態にリセット
            $trigger.attr('aria-expanded', false).attr('aria-label', 'メニューを開く');
            $gnav.attr('aria-hidden', true).hide();
        }
    }
    point_header.addListener(checkBreakPoint);
});