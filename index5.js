let num = 5;
let count =1;
for(let i=1;i<=num; i++){
    stars = '';
    for(let  j=1; j<=i;j++){
        stars = stars + count;
        count = count + 1;
        stars +=' '
    }
    console.log(stars)
}