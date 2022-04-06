window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {

        var e = window.scrollY;
//        console.log("縦スクロール：" + e);
        var tra = document.getElementById("backdecoration__layer--first");
        var tra2 = document.getElementById("backdecoration__layer--second");
        var tra3 = document.getElementById("backdecoration__layer--third");

        tra.style.transform = "translateY(" + .2 * e + "px)";
        tra2.style.transform = "translateY(" + .22 * e + "px)";
        tra3.style.transform = "translateY(" + .24 * e + "px)";
    });
});
