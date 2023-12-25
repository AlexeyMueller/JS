let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let shuffle = function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));
        arr[i]=arr[rnd];
        arr[rnd] = temp;
        }
    return arr;
}

for (let i = 0; i < 10; i++ ) {
    console.log(shuffle(arr).join(" , "));
}
  

