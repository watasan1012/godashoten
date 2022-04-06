/*
 ** JavaScript
 ** scroll event
 */

var startPos, winScrollTop;

startPos = 0;
winScrollTop = 0;


// イベント
window.addEventListener('DOMContentLoaded', (event) => {
    'use strict';
    // scrollイベントを設定
    window.addEventListener('scroll', () => {
        
        winScrollTop = this.scrollY;
        var ariaHidden = document.getElementById('gnav').getAttribute('aria-hidden');

        if (winScrollTop >= startPos) {
            // 下にスクロールされた時 && スマフォ時に
            if (winScrollTop >= 100 && window.innerWidth < 768 && ariaHidden === 'true') {
                // 下に200pxスクロールされたら隠す
                document.body.classList.add('scroll');
            }
        } else {
            // 上にスクロールされた時
            document.body.classList.remove('scroll');
        }
        startPos = winScrollTop;
    });
});
