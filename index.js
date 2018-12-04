const a = 'Parent A'
const functionA = () => {
    // scope a
    const functionB = (b) => {
        const a = 'Child A'
            // scope b
        const functionC = (c) => {
            console.log(a, b, c);
        }

        // console.log(c);
        return functionC;
    }
    return functionB;
}

const b = functionA('AAAAA');

const c = b('BBBB');

c('CCCC');