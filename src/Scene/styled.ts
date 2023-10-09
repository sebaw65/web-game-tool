import styled from "styled-components";
import { Canvas } from "@react-three/fiber";

export const StyledCanvas = styled(Canvas)`
  & canvas {
    width: 100%;
    height: 100%;
  }
`;
