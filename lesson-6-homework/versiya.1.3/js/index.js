var dollar = +prompt("hozirda dollar kursi qancha, iltimos kiritib yuboring");
var yevro = +prompt("hozirda yevro kursi qancha bo'lyapti");
var ticket = +prompt("bilet narxi necha dollar ekan  ");

ticket *= dollar;

var hotel = +prompt("mehmonhonaga narxi necha dollar ekan");

hotel *= dollar;

var vocation = +prompt(
  "ko'ngil ochar joylarga necha yevro sarflashingizni hisoblab chiqdingizmi"
);

vocation *= yevro;

var total = ticket + hotel + vocation;

var userInput = +prompt("sizda qancha summa (so'm) bor");
var difference = total - userInput;

if (userInput != NaN) {
  if (userInput >= total) {
    alert(
      "sizda sayohat uchun yetarlicha mablag' bor. safaringiz behatar bo'lsin"
    );
  } else if (userInput >= ticket + hotel) {
    alert(
      `sizdagi pul faqat bilet va mehmonhonaga yoki bilet va ko'ngil ochar joylarga borish uchun yetadi
       ammo uchalasi uchun bir vaqatda to'lashga yetmaydi.
       siz ${difference} so'm pul yig'ishingiz kerak.
       so'ng sayohatga chiqsangiz maqsadga muvofiq bo'ladi`
    );
  } else if (userInput >= ticket + vocation && userInput < ticket + hotel) {
    alert(`sizdagi pul faqat bilet va ko'ngil ochish uchun yetadi holos. 
    yana ${difference} so'm pul to'plashingiz kerak.`);
  } else if (userInput >= ticket && userInput < ticket + vocation) {
    alert(
      `sizdagi pul faqat biletga yetadi.
      hozircha mahallangizni ertalab bir ikki marta aylanib chiqsangiz ham bo'laveradi,
      siz uchun shu ham sayohat.
       siz yana ${difference} so'm pul yig'ishingiz kerak`
    );
  } else {
    alert(
      `bir joyingni qisib uyingda o'tir va ishlab pul top 
      senga bor hali sayohat qilishga tushundingmi toy bola`
    );
  }
} else {
  alert("iltimos faqat son kiriting");
}
