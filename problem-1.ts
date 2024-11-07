{
    const sumArray = (num: number[]):number =>{
    return num.reduce((total, num)=> total + num, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]));
}
