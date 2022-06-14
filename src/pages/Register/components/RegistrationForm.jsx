import React from 'react'
import styled from 'styled-components';
import colors from "../../../assets/themes/base/colors"
import hexToRgb from '../../../assets/themes/functions/hexToRgb';
import { Toast } from '../../../assets/util/swal';

const FormGroup = styled.div`
    margin-bottom: 1rem;
`
const UserButton = styled.a`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    color: ${colors.white.main}; 
    border-color: ${colors.white.main}; 
    border-radius: 10rem; 
    font-size: 0.8rem;
`

const FBButton = styled(UserButton)`
    background-color: ${colors.socialMediaColors.facebook.main}; 
    :hover{
        background-color: ${colors.socialMediaColors.facebook.dark}; 
        color: ${colors.white.main};
    }
    :focus, :active{
        box-shadow: 0 0 0 0.25rem rgb(${hexToRgb(colors.socialMediaColors.facebook.main, " ")}/ 25%);
    }
`;

const GoogleButton = styled(UserButton)`
    background-color: ${colors.socialMediaColors.google.main}; 
    :hover{
        background-color: ${colors.socialMediaColors.google.dark}; 
        color: ${colors.white.main};
    }
    :focus, :active{
        box-shadow: 0 0 0 0.25rem rgb(${hexToRgb(colors.socialMediaColors.google.main, " ")}/ 25%);
    }
`
export default function RegistrationForm() {
  return (
    <form className="user">
        <FormGroup className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <input type="text" className="form-control" placeholder="First Name"/>
            </div>
            <div className="col-sm-6">
                <input type="text" className="form-control" placeholder="Last Name"/>
            </div>
        </FormGroup>
        <FormGroup>
            <input type="email" className="form-control" placeholder="Email Address"/>
        </FormGroup>
        <FormGroup>
            <input type="text" className="form-control" placeholder="Username"/>
        </FormGroup>
        <FormGroup className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="col-sm-6">
                <input type="password" className="form-control" placeholder="Repeat Password"/>
            </div>
        </FormGroup>
        <UserButton href="login.html" className="btn btn-primary">
            Register Account
        </UserButton>
        <hr/>
        <GoogleButton href="javascript:void(0)" onClick={()=>{
            Toast.fire({
                icon: 'error',
                title: 'Unable to register at the moment.'
            })
        }} className="btn">
            <i className="bi bi-google"></i> Register with Google
        </GoogleButton>
        <FBButton href="javascript:void(0)" onClick={()=>{
            Toast.fire({
                icon: 'error',
                title: 'Unable to register at the moment.'
            })
        }} className="btn mt-2">
            <i className="bi bi-facebook"></i> Register with Facebook
        </FBButton>
    </form>
  )
}
