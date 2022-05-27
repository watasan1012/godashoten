// 次へボタン
const nextbtn = document.getElementById('scrollingcarouselnext');
// 前へボタン
const prevbtn = document.getElementById('scrollingcarouselprev');
// card枚数
const cordtotal = document.getElementsByClassName('scrollingcarousel__item').length;
// card枚数 one minus 
let cardnum = cordtotal - 1;
// cardサイズ
let cardwidth = document.querySelector(".scrollingcarousel__item").clientWidth;
// カードサイズ + 横幅を作る
let cardouterframe = cardwidth + 10;
// カウント
let count = 0;
// card change point 
const cardchangepoint = document.querySelector(".scrollingcarousel__list");

// 属性の確認
//let nextgattribute = nextbtn.getAttribute('aria-disabled');
//let prevgattribute = prevbtn.getAttribute('aria-disabled');

/* スクロール量が知りたい */
//scrollingcarousel__list

nextbtn.addEventListener('click', () => {
  if (count < cardnum) {
    count++;
    prevbtn.setAttribute('aria-disabled', 'false');
    setstyle(count);
  } else {
    nextbtn.setAttribute('aria-disabled', 'true');
  }
});

prevbtn.addEventListener('click', () => {
  if (0 < count) {
    count--;
    nextbtn.setAttribute('aria-disabled', 'false');
    setstyle(count);
  } else {
    prevbtn.setAttribute('aria-disabled', 'true');
  }
});

const setstyle = (count) => {
  cardchangepoint.style.transform = "translateX(" + -(cardouterframe * count) + "px)";
  cardchangepoint.style.transitionDuration = '600ms';
}