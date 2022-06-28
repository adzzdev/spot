import React from 'react'
import styled from 'styled-components'
import photo from "../../assets/img/photo1.png";
import boxShadows from "../../assets/themes/base/boxShadows";
import colors from '../../assets/themes/base/colors';

const Widget = styled.div`
    margin-bottom: 3rem;
    border: none;
    box-shadow: ${boxShadows.md};
`

const WidgetFooter = styled.div`
    background-color: ${colors.white.main};
    display:none;

`

const WidgetImg = styled.img`
    border-radius: .5rem;
`
const ShapeContainer = styled.div`
    position:absolute;
    width: 100%;
    margin-bottom: -0.25rem;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
`

const ShapeWrapper = styled.div`
    position:relative;
    padding:0px;
    margin:0px;
`

const UserProfileTiny = styled.img`
    width: 1.25rem;
    border: 1px solid gray;
    border-radius: 50%;
    
`

export default function BlogPreview() {
  return (
    <>
        <Widget className='card'>
            <ShapeWrapper>
                <WidgetImg className="w-100" src={photo}/>
                <ShapeContainer>
                    <svg className="w-100" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                        <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                    </svg>
                </ShapeContainer>
            </ShapeWrapper>
            <div className='card-body'>
                <div className='p-2 mt-2'>
                    <h2 className='display-6'>I don't want to switch from Android to iPhone because Apple's ecosystem is too good</h2>
                    <p className="text-secondary">Apple's ecosystem is second to none, and it comes with great functionality.</p>
                </div>
            </div>
            <WidgetFooter className="card-footer">
                <div className='row'>
                    <div className='col-6'>
                        <UserProfileTiny src="https://avatars.dicebear.com/api/identicon/adzz.svg"/>
                    </div>
                    <div className='col-6 '>
                        <div className='float-end'>
                            June 10, 2022
                        </div>
                    </div>
                </div>

            </WidgetFooter>
        </Widget>
    </>
  )
}
