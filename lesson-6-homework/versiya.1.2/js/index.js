var dollar = 11000.34;
var yevro = 12354.03;
var ticket = 500 * dollar;
var hotel = 250 * dollar;
var vocation = 120 * yevro;
var total = ticket + hotel + vocation;

var userInput = +prompt("sizda qancha summa bor");
var difference;

if (userInput != NaN) {
  if (userInput >= total) {
    alert(
      "sizda sayohat uchun yetarlicha mablag' bor. safaringiz behatar bo'lsin"
    );
  } else if (userInput >= ticket + hotel) {
    difference = total - userInput;
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
}
