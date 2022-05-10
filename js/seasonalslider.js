// 次へボタン
const nextbtnelement = document.getElementById('seasonalsliderbtnnext');
// 前へボタン
const prevbtnelement = document.getElementById('seasonalsliderbtnprev');
// card ttl num
const cordttlnumelement = document.getElementsByClassName('slider__item').length;
// cardnumoneminus 
let cardnum = cordttlnumelement - 1;
// カードサイズ
let cardwidthelement = document.querySelector(".slider__item").clientWidth;
// カードサイズ + 横幅を作る
let cardouterframe = cardwidthelement + 10;
// カウント
let count = 0;
// card list 
const cardlistelement = document.getElementById('sliderscroll');

// 属性の確認
//let nextgattribute = nextbtnelement.getAttribute('aria-disabled');
//let prevgattribute = prevbtnelement.getAttribute('aria-disabled');

nextbtnelement.addEventListener('click', () => {
  if (count < cardnum) {
    prevbtnelement.setAttribute('aria-disabled', 'false');
    count++;
    cardlistelement.style.transform = "translateX(" + -(cardouterframe * count) + "px)";
    cardlistelement.style.transitionDuration = '600ms';
  } else {
    nextbtnelement.setAttribute('aria-disabled', 'true');
  }
});

prevbtnelement.addEventListener('click', () => {
  if (count > 0) {
    nextbtnelement.setAttribute('aria-disabled', 'false');
    count--;
    cardlistelement.style.transform = "translateX(" + -(cardouterframe * count) + "px)";
    cardlistelement.style.transitionDuration = '600ms';
  } else {
    prevbtnelement.setAttribute('aria-disabled', 'true');
  }
});