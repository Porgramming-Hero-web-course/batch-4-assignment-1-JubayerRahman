{
    const countWordOccurrences = (sentence: string, word:string) =>{

    const lowerSentence = sentence.toLowerCase()
    const loweWord = word.toLowerCase()

    const regex = new RegExp(`\\b${loweWord}\\b`, 'g')

    const matchs = lowerSentence.match(regex)

    return matchs?.length
}

console.log(countWordOccurrences("I am Ohee ohee OHEE", "i"));
}
