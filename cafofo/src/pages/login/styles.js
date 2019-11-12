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
  padding: 30px;
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
  input:focus {
    border: 1px solid #0099B0;
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
  button:hover {
    color: #fff;
    background-color: #f38633;
    transition-duration: 0.3s;
    transform: scale(1.002);
    border-color: #f38633;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border-color: #0099B0;
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
  a:hover {
    color: #0099B0;
  }
  h1 {
    font-size: 26px;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #0099B0;
  }
  #button-factory {
    margin-bottom: 30px;
    margin-right: 20px;
  }
`