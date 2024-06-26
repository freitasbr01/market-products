import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRAY_400};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};

  margin: .5rem 0 2rem;
  border-radius: .5rem;

  > input {
    width: 100%;
    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.DARK_100};
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > input:focus {
    outline: none;
  }

  > svg {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.DARK_100};
  }
`