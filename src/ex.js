var request=require('request')
// var URL = 'http://www.ferra.ru/ru/techlife/news/';
var URL="https://www.harpersbazaar.com/culture/travel-dining/g7171/most-beautiful-places-in-the-world/"

request(URL, function (err, res, body) {
    if (err) throw err;
    console.log(body);
    console.log(res.statusCode);
});
// var st = 'aabaa'
// const leng = st.length
// console.log(leng)
// var b = ''
// for (let i = 0; i < leng; i++) {
//     if (st[i] === st[leng - i - 1]) {
//         console.log('true: ', st[i])
//         b += st[i]
//     }
//     else {
//         console.log('false: ', st[i])
//     }
// }
// if (st === b) {
//     console.log('True: ')
// }
// else {
//     console.log(false);
// }

// console.log('new string: ', b)

function check(str) {
    const leng=str.length;
    var b = ''
    for (let i = 0; i < leng; i++) {
        if (str[i] === str[leng - i - 1]) {
            // console.log('true: ', st[i])
            b += str[i]
        }
        else {
            continue
        }
    }
    if (str === b) {
       return true
    }
    else {
        // console.log(false);
        return false
    }

}
console.log(check('aabaa'))
console.log(check('ads'))
console.log(check('sas'))