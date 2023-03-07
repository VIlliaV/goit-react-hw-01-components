import styled from 'styled-components';

export const Section = styled.section`
  width-min: 250px;
  font-size: 24px;
  text-align: center;
  background-color: #f3ebeb;
  & .stat-list {
    display: flex;
    justify-content: space-around;
    background-color: #cec6c6;
    border: 1px solid black;
    & .item {
      display: flex;
      width: 50px;
      padding: 7px;
      flex-direction: column;
      font-size: 12px;
      border: 1px solid black;
      color: white;
      & .percentage {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;
