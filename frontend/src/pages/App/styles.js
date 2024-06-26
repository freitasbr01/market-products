import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
width: 100%;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

padding: 1.5rem;

img {
  max-width: 18rem;
  margin-bottom: 2rem;
}

  .box-main {
    padding: 2rem;
    box-shadow: 0rem 1rem 2rem -1rem rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .box-main {
      padding: 1rem;
    }
  }



`