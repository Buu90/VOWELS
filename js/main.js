"use strict";

function words() {
  var k = 0;
  var stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
  var f = prompt("Введите строку:");
  for (var i = 0; i < f.length; i++)
      for (var j = 0; j < stringsearch.length; j++)
          if (f[i] === stringsearch[j]) {
              ++k;
              break;
          }
  return k ? k : "Нет совпадений";
}

console.log(words());
