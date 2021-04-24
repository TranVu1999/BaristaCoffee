/**
 * 
 * @param {*} str is price
 * @returns string is standardzied
 */
export const standardPrice = (str) =>{
    str += ""
    let resString = ""
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();

    for(let index in reverseStr){
        if((index + 1) % 3 === 0){
            resString += ','
        }
        resString += str[index]
    }

    return resString
}