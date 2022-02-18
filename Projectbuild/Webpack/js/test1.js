const lis = document.getElementsByTagName("li");
//闭包
export function fn1() {
  for (var i = 0; i < lis.length; i++) {
    (function (i) {
      lis[i].onclick = function () {
        alert(i + 1);
      };
    })(i);
  }
}
