import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;

  .title-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    span {
     color: ${({theme}) => theme.COLORS.GREEN_200};
    }

    Button {
      max-width: 18rem;
    }
  }

  .box-table {
    max-width: 70.0rem;
    border: 1px solid ${({theme}) => theme.COLORS.LIGHT_600};
    border-radius: .5rem;
    overflow: hidden;
  }

  .scrollbar {
    max-height: 45rem;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: .6rem;
    cursor: move;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .title-header {
      h1 {
        font-size: 2.4rem;
      }

      Button {
        max-width: 14rem;
        font-size: 1.2rem;
        padding: 1.2rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .title-header {
      h1 {
        font-size: 2rem;
      }

      Button {
        max-width: 10rem;
        font-size: 1rem;
        padding: 1rem;
      }
    }
  }
`


export const Table = styled.table`
  width: 100%;
  font-size: 1.4rem;
  border-collapse: collapse;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.3rem;
  }
`

export const Thead = styled.thead`

  tr {
    display: table;
    width: 100%;
    table-layout: fixed;

    background: ${({theme}) => theme.COLORS.GRADIENT_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  th {
    padding: 1rem;
    text-align: left;
  }
`

export const Tbody = styled.tbody`
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tr:nth-child(odd) {
    background: ${({theme}) => theme.COLORS.GRAY_400}
  }

  tr:nth-child(even) {
    background: ${({theme}) => theme.COLORS.LIGHT_100};
    border-top: 1px solid #147c9b86;
    border-bottom: 1px solid #147c9b86;
  }

  td {
    border: 1px solid ${({theme}) => theme.COLORS.GRAY_600};
    padding: 1rem;
  }
`