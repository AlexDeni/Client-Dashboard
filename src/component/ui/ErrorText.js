import React from 'react';

const ERROR = {
    default: 'Произошла ошибка, зайдите позже',
};

export default function ErrorText({ errorText }) {
    if (!errorText) {
        return null;
    } else {
        return <div>{ERROR['default']}</div>;
    }
}
