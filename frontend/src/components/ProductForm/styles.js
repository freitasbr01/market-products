import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    align-self: self-start;
    font-weight: bold;
    font-size: 1.4rem;
  }

  h1 {
    font-size: 3.2rem;
    margin-bottom: 3rem;

    span {
      color: ${({ theme }) => theme.COLORS.GREEN_200};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 2.7rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 2.1rem;
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 7rem;
  border: 0;
  
  color: ${({ theme }) => theme.COLORS.DARK_100};
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: .5rem;
  
  resize: none;
  padding: 1rem;
  margin: .5rem 0 2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    outline: none;
  }
`

export const Select = styled.select`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.DARK_100};
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: .5rem;

  margin: .5rem 0 2rem;
  padding: 1rem;

  &:focus {
    outline: none;
  }

`

export const Button = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.DARK_100};
  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: .5rem;
  
  font-weight: bold;
  text-transform: uppercase;

  padding: 1.5rem;
  margin: 3rem 0;

  `