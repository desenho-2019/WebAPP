import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  background-image: linear-gradient(to right,#0099B0, #A7DBD7);
`;

export const Form = styled.form`

  width: 700px;
  background: #fff;
  padding: 20px;
  display: table;
  margin-top: 3%;
  margin-bottom: 50px;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
  img {
    width: 100px;
    margin: 10px 0 40px;
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
    border-radius: 3px;
    
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
    transition-duration: 0.3s;
    transform: scale(1.002);
  }
  hr {
    margin: 20px 0;
    margin-left: 40%;
    border-color: #0099B0;
    border-bottom: 1px solid #cdcdcd;
    width: 20%;
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
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;
    color: #0099B0;
  }
`