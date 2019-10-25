import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(to right,#0099B0, #A7DBD7);
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  margin: 4%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  input {
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
  button {
    color: #fff;
    font-size: 16px;
    background: #fa6900;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    margin: 10px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16px;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    margin-bottom: 10px; 
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 40px; 
  }
`