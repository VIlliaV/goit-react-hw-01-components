import styled from 'styled-components';

export const Item = styled.li`
   {
    display: flex;
    align-items: center;
    width: 250px;
    padding: 5px;
    margin: 5px;
    font-size: 30px;
    box-shadow: 5px 5px 10px grey;
    gap: 10px;
    &:hover {
      box-shadow: 7px 7px 20px black;
    }

    & .status {
      width: 20px;
      height: 20px;
      background-color: ${
        ({ isOn }) => (isOn ? 'green' : 'red')
        // console.log(isOn)
      };
      border: 1px solid gray;
      border-radius: 50%;
    }
  }
`;
