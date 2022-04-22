import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  p {
    font-size: 15px;
    text-align: center;
  }

  button {
    position: absolute;
    width: auto;
    background-color: #f5d3f2;
    border: 0;
    padding: 3px 8px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
