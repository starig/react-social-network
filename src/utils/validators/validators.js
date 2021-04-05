export const required = (value) => {
    if (value) {
        return undefined;
    } else{
        return 'It can`t be empty'
    }
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length <= maxLength) {
        return undefined;
    } else{
        return `Max length is ${maxLength} symbols`
    }
}
