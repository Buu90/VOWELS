"use strict";

var q = prompt('Введите строку', '').toLowerCase();
 
function vowels(str) {
    let v = "аоиеёэыуюя";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (v.includes(char))
            ++count;
    }
    return count;
}
console.log(vowels(q));
