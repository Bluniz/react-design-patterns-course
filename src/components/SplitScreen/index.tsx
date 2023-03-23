import { Children, PropsWithChildren } from 'react';


import {SplitScreenProps} from "./types"
import {Container, Pane} from "./styled"


//! Course Component
export const SplitScreen = ({children, leftWeight = 1, rightWeight = 1}: PropsWithChildren<SplitScreenProps>) => {

  const [left, right] = Children.toArray(children);

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>

  )
}