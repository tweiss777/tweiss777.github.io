import { DimensionContext } from "../Contexts/DimensionProvider";
import { useContext } from 'react';

export const useDimensions = () => useContext(DimensionContext);