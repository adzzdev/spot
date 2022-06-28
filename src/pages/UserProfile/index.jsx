import React from 'react'
import styled from 'styled-components'
import BlogPreview from './BlogPreview';
import ProfileHeader from './ProfileHeader';


const Wrapper = styled.div`
    @media (min-width: 992px){
        width: 65%!important;
    }
`
export default function UserProfile() {
  return (
    <>
    <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-1 mt-4">
    <Wrapper className="w-md-75 w-lg-65 mx-md-auto">
            <ProfileHeader></ProfileHeader>
        </Wrapper>
        <div className="container content-space-t-3 content-space-t-lg-4 content-space-b-1 mt-4">
            <Wrapper className="w-md-75 w-lg-65 mx-md-auto">
                <BlogPreview></BlogPreview>
            </Wrapper>

            <Wrapper className="w-md-75 w-lg-65 mx-md-auto">
                <BlogPreview></BlogPreview>
            </Wrapper>
        </div>
        </div>
    
        
    </>
  )
}
