function sing() {
    let str = ''
    for (let i = 0; i < 12; i++) {
        if (i === 4) {
            str += 'whisper words of wisdom, '
        }
        else if (i === 10) {
            str += 'there will be an answer, '
        } else{
            str += 'let it be, '
        }
    }
    let song = str.slice(0,str.length -2)
    return song
}

//Your code above ^^^

console.log(sing());