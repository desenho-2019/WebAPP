import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const Form = styled.form`

  width: 1100px;
  background: #fff;
  padding: 20px;
  display: table;
  margin-top: 25%;
  margin-bottom: 50px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  .grid-container {
    float: left;
    width: 50%;
    padding: 20px;
  }
  input {
    display: flex;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #000;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  input:focus {
    border: 1px solid #0099B0;
  }
  select {
    display: flex;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  input#file {
    padding-top: 8px; 
  }
  button {
    color: #fa6900;
    font-size: 16px;
    background-color: #fff;
    height: 56px;
    border: 2px solid #fa6900;
    border-radius: 5px;
    width: 100%;
  }
  button:hover {
    color: #fff;
    background: #fa6900;
    transition-delay: 0.1s;
    transform: scale(1.002);
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    margin-bottom: 10px; 
    text-align: center;
    float: right;
  }
  a:hover {
    color: #0099B0;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
  }
`