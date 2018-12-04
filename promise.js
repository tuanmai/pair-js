const fetchAPI = () => {
    const p = new Promise((resolve, reject) => {
        resolve([1, 2, 3, 4, 5, 6]);
    })
    return p;
}

const fetchAPI2 = () => {
    const p = new Promise((resolve, reject) => {
        resolve(false);
    })
    return p;
}

// const fetchAPI3 = () => {
//     const p = new Promise((resolve, reject) => {
//         if (true) {
//             resolve(`API reponse 3`);
//         } else {
//             reject('Error Message 3');
//         }
//     })
//     return p;
// }

const filter = (predicate) => (elements) => {
    newArray = []
    for (let element of elements) {
        if (predicate(element)) {
            newArray.push(element)
        }
    }
    return newArray
}

const isEven = (element) => element % 2 == 0
const isOdd = (element) => element % 2 == 1

const conditionalFunction = (b) => {
    if (b) {
        return isEven
    } else {
        return isOdd
    }
}

//outside

// fetchAPI()
//     .then((elements) => {
//         const promise2 = fetchAPI2()
//             .then((condition) => {
//                 const filterFunction = filter((conditionalFunction(condition)))
//                 return filterFunction(elements); // array
//             })
//         return promise2;
//     })
//     .then((elements) => console.log(elements))

// fetchAPI2()
//     .then((condition) => {
//         const filterFunction = filter((conditionalFunction(condition)));
//         return filterFunction;
//     })
//     .then((filterFunction) => {
//         return fetchAPI()
//             .then((elements) => filterFunction(elements));
//     })
//     .then((elements) => console.log(elements))

Promise.all([fetchAPI(), fetchAPI2()])
    .then((data) => {
        const elements = data[0];
        const condition = data[1];
        // console.log(elements, condition);
        const filterFunction = filter((conditionalFunction(condition)));
        return filterFunction(elements);
    })
    .then((elements) => console.log(elements))

// something.then(whenSuccess, whenError)