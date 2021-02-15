//Used like UseState, but to store info in local storage

import { useEffect, useState } from 'react'

// Used to keep local storage oragnized
const PREFIX = "hatchways-messenger-"

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;

    // Taking value from local storage and setting it to a function's state
    const [ value, setValue ] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue);
        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })

    //Any time value or prefixed key change, over-write old value with a stringified JSON value
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [ prefixedKey, value ])
    
    return [value, setValue]
}