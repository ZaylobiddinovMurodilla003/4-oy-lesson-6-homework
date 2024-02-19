var dollar = 11000.34;
var yevro = 12354.03;
var ticket = 500 * dollar;
var hotel = 250 * dollar;
var vocation = 120 * yevro;
var total = ticket + hotel + vocation;

var userInput = +prompt("sizda qancha summa bor");

if (userInput != NaN) {
  if (userInput >= total) {
    alert(
      "sizda sayohat uchun yetarlicha mablag' bor. safaringiz behatar bo'lsin"
    );
  } else {
    alert(
      "sizda sayohat qilish uchun pul mablag' yetarli emas hozircha uyingizni ichini aylanib turing sayohatga esa pul topganingizdan so'ng borasiz "
    );
  }
}
