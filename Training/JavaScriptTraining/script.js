// //ax2+bx+c=0
// let a = prompt("введите a");
// let b = prompt("введите b");
// let c = prompt("введите c");
// let d = b * b - 4 * a * c;
// if (d == 0) {
//   let x = -b / (2 * a);
//   alert(x);1
// } else if (d > 0) {
//   let x1 = ((-b + Math.sqrt(d)) / 2) * a;
//   alert(x1);
//   let x2 = ((-b - Math.sqrt(d)) / 2) * a;
//   alert(x2);
// }

/* 
let i = 1;
while (i <= 10) {
    alert(i);
    i++;
}
i = 10;
while (i >= 1) {
    alert(i);
    i--;
} */

/* let user = {
    name: "Виталий",
    age: 36,
    bol: true,
    "is admin": true
}
 alert(user.age);
 alert(user[age]);
 //delete user.bol;
 alert(user.bol); */

let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Всем привет</strong>Важное сообщение";
document.body.append(div);
alert("text");
