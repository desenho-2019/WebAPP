import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  background-image: linear-gradient(to right,#0099B0, #A7DBD7);
`;

export const Form = styled.form`

  width: 1300px;
  background: #fff;
  padding: 40px;
  padding-top: 20px;
  display: flex;
  margin-top: 3%;
  margin-bottom: 50px;
  flex-direction: column;
  border-radius: 10px;

  .forms-container {
    width: 100%;
    justify-content: space-between;
  }

  .forms-collumn-1 {
    display: table;
    width: 45%;
    padding-left: 5%;
    float: left;
  }

  .forms-collumn-2 {
    display: table;
    width: 50%;
    padding-left: 10%;
    overflow: hidden;
  }

  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  input, textarea {
    display: flex;
    height: 46px;
    margin-bottom: 30px;
    padding: 9px 20px;
    color: #000;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
    border-radius: 3px;
  }

  textarea {
    resize: none;
    height: 90px !important;
  }

  input:focus , textarea:focus {
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
  .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .inputfile + label {
    font-size: 16px;
    font-weight: bold;
    padding: 6px;
    border-radius: 6px;
    border: 2px solid #fa6900;
    color: white;
    background-color: #fa6900;
    display: inline-block;
    margin-bottom: 30px;
}

  .inputfile:focus + label,
  .inputfile + label:hover {
      background-color: #f38633;
      transition-duration: 0.3s;
      transform: scale(1.002);
      border-color: #f38633;
  }
  
  button {
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
    background-color: #fa6900;
    height: 56px;
    border: 2px solid #fa6900;
    border-radius: 5px;
    width: 30%;
    margin-left: 70%;
    
  }
  button:hover {
    color: #fff;
    background-color: #f38633;
    transition-duration: 0.3s;
    transform: scale(1.002);
    border-color: #f38633;
  }
  hr {
    margin: 20px 0;
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
    text-align: center;
    margin-left: 33%;
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
  h5 {
    width: 100%;
    display: flex;
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-weight: bold;
    margin-bottom: 2px;
    color: #0099B0;
  }
  h6 {
    color: red;
  }
  span {
    font-family: 'Trebuchet MS', Arial, sans-serif;
    font-weight: bold;
    font-size: 13px;
    color: #999;
  }
  p {
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #f38633;
    margin-bottom: 2%;
    margin-top: -1%;
    font-size: 17px;
  }
`