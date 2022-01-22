// ==UserScript==
// @name         Lyric copy
// @namespace    Lyric copy
// @version      0.2
// @description  copy the lyric
// @author       Toshihito Kudo
// @include      https://www.uta-net.com/song*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // ボタン生成
    $(".kashi-related").after(`<div id="js-copybtn" class="col-3"><a class="btn btn-sm btn-light w-100 px-0">Copy Lyric</a></div>`);
    $('#js-copybtn').click(function(){
        // コピーする文章の取得
        let lyric_html = $('#kashi_area').html().replaceAll("<br>", "\n");
        // テキストエリアの作成
        let clipboard = $('<textarea></textarea>');
        // テキストエリアに文章を挿入
        clipboard.text(lyric_html);
        //　テキストエリアを挿入
        $('body').append(clipboard);
        //　テキストエリアを選択
        clipboard.select();
        // コピー
        navigator.clipboard.writeText(lyric_html)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
        // テキストエリアの削除
        clipboard.remove();
        // アラート文の表示
        alert('クリップボードにコピーしました');
    });
})();
