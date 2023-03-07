import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  font-size: 24px;
  text-align: center;
  background-color: #f3ebeb;
  margin: 5px;
  border: 1px solid grey;
  border-radius: 20px;
  box-shadow: 3px 3px 10px;
  /* padding: 5px; */
  & .avatar {
    width: 100px;
    padding: 1px;
    margin: 30px auto;
    border: 2px solid black;
    border-radius: 50%;
  }
  & .description {
    padding: 5px;
  }
  & .location,
  .tag {
    padding-top: 5px;
    font-size: 16px;
    color: #484343;
  }
  & .stats {
    display: flex;
    justify-content: space-around;
    background-color: #cec6c6;

    & li {
      display: flex;
      width: 100%;
      padding: 3px;
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
