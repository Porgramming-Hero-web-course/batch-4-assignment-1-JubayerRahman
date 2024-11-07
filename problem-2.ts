{
    const removeDuplicates =( numbers: number[]) : number[] =>{
    const uniqueNumbers: number[] = []
    const seen =new Set<number>()

    for(const n of numbers){
        if(!seen.has(n)){
            seen.add(n)
            uniqueNumbers.push(n)
        }
    }
    return uniqueNumbers;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,5,5,5,6,6,6,7,8,8,9,9]));

}

