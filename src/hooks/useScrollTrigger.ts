import { useState, useEffect, useRef, useCallback } from "react";
export default function useScrollTrigger(){

    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    const cb = useCallback((entries: any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    },[])

    useEffect(() => {
        const observer = new IntersectionObserver(cb, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [cb]);
    return { ref, isVisible };
}