import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false); // крутилка
    const [error, setError] = useState('') // обработка ошибки // текс ошибки

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error];
}