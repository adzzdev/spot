import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoints from "../../assets/themes/base/breakpoints";

import RegistrationForm from './components/RegistrationForm'

const RegisterImage = styled.div`
    background: url(https://source.unsplash.com/Mv9hjnEUHR4/600x800);
    background-position: center;
    background-size: cover;
`;

const Container = styled.div`
    @media (min-width: ${breakpoints.values.xxl}px){
        max-width: 60% !important;
    }
`

export default function RegisterIndex() {
    useEffect(function(){
        document.querySelector("body").classList.add("bg-primary");;
        return () =>{
            document.querySelector("body").classList.remove("bg-primary");
        }
    },[])
  return (
    <Container className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="row">
                    <RegisterImage className="col-lg-5 d-none d-lg-block"></RegisterImage>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            {/* Registration Form */}
                            <RegistrationForm></RegistrationForm>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="forgot-password">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="login">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}
