const a = [1, 2, 3, 4, 5, 6];
const b = [3, 4, 5, 7];

// const returnEven = (elements) => {
//     newArray = []
//     for (let element of elements) {
//         if (element % 2 == 0) {
//             newArray.push(element)
//         }
//     }
//     return newArray
// }

// const divisibleByThree = (elements) => {
//     newArray = []
//     for (let element of elements) {
//         if (element % 3 == 0) {
//             newArray.push(element)
//         }
//     }
//     return newArray
// }

const filter = (predicate) => {
    const aFunction = (elements) => {
        newArray = []
        for (let element of elements) {
            if (predicate(element)) {
                newArray.push(element)
            }
        }
        return newArray
    }
    return aFunction;
}


const isEven = (element) => element % 2 == 0
const returnEven = filter(isEven);
const divisibleByThree = filter((element) => element % 3);
console.log(returnEven(a));
console.log(divisibleByThree(a))