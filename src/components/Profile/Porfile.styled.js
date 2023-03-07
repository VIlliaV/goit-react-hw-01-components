import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  font-size: 30px;
  text-align: center;
  background-color: #f3ebeb;
  padding: 5px;
  & .description {
    padding: 5px;
  }
  & .location,
  .tag {
    padding-top: 5px;
    font-size: 20px;
    color: #484343;
  }
  & .stats {
    display: flex;
    justify-content: space-around;
    background-color: #cec6c6;

    & li {
      display: flex;
      width: 100%;
      flex-direction: column;
      font-size: 12px;
      border: 1px solid black;
      color: #484343;
      & .label {
        font-weight: bold;
        color: black;
      }
    }
  }
`;
