import { createContext, useEffect, useState } from "react";

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

type Dimension = {
    width: number,
    height: number
}

export const DimensionContext = createContext<Dimension>({
    width: 0,
    height: 0,
})

export default function DimensionProvider({ children }: Props) {
  const [dimensions, setDimensions] = useState<Dimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    function handleResize() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 1000);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <DimensionContext.Provider value={dimensions}>
      {children}
    </DimensionContext.Provider>
  );
}
