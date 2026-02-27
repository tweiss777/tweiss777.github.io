import '../../../scss/Techstack.scss';
import React, {
    JSX,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export default function TechStack({ children }: IProps) {
    const [position, setPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef(false);
    const offsetRef = useRef(0);
    const animationRef = useRef<number | null>(null);

    const speed = 0.5;

    const animate = useCallback(() => {
        if (!dragRef.current && containerRef.current) {
            const stackWidth =
                containerRef.current.scrollWidth / 2;

            setPosition((prev) => {
                const next = prev - speed;
                return Math.abs(next) >= stackWidth ? 0 : next;
            });
        }

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [animate]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!dragRef.current) return;
        setPosition(e.clientX - offsetRef.current);
    }, []);

    const handleMouseUp = useCallback(() => {
        dragRef.current = false;
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    }, [handleMouseMove]);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            dragRef.current = true;
            offsetRef.current = e.clientX - position;
            setIsDragging(true);

            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        },
        [position, handleMouseMove, handleMouseUp]
    );

    return (
        <div className="tech-stack-container">
            <h1>Tech stack I work with</h1>
            <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                style={{ transform: `translateX(${position}px)` }}
                className={`carousel-container${isDragging ? " dragging" : ""}`}
            >
                <div className="tech-stack">{children}</div>
                <div className="tech-stack">{children}</div>
            </div>
        </div>
    );
}