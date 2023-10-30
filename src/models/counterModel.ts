/**
 * todo test demo
 */
import {useState, useCallback} from 'react'

export default function Page() {
    const [counter, setCounter] = useState(0);
  
    const increment = useCallback(() => setCounter((c) => c + 1), []);
    const decrement = useCallback(() => setCounter((c) => c - 1), []);
  
    return { counter, increment, decrement };
};