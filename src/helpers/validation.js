
export const required = value => {
    if(value) return undefined;
    return 'Поле обязательное';
}

export const maxLengthCreator = maxLength => value => {
    return value && value.length > maxLength ? `Максимальное количество ${maxLength}` : undefined
}

export const minLengthCreator = minLength => value => {
    return value && value.length < minLength ? `Минимальное количество ${minLength}` : undefined
}