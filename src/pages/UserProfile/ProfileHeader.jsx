import React from 'react'
import styled from 'styled-components';

const AvatarContainer = styled.div`
    position: relative;
    display: inline-block;

    width: 7rem;
    height: 7rem;
    border-radius: 50%;
`;

const AvatarImg = styled.img`
    width: 7rem;
    border-radius: 50%;
`
export default function ProfileHeader() {
  return (
    <div className="d-sm-flex">
            <div className="flex-shrink-0 mb-3 mb-sm-0">
                <AvatarContainer className="avatar avatar-xxl avatar-circle">
                    <AvatarImg className="shadow" src="https://avatars.dicebear.com/api/identicon/adzz.svg" alt="Image Description"/>
                </AvatarContainer>
            </div>

            <div className="flex-grow-1 ms-sm-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="h2 mb-0">Adzz</h1>

                <button type="button" className="btn btn-outline-primary btn-sm">
                    <i className="bi-person-plus-fill me-1"></i> Follow
                </button>
                </div>

                <div className="row mb-3">
                <div className="col-auto">
                    <span className="h6">0</span>
                    <span className="ms-1">Posts</span>
                </div>

                <div className="col-auto">
                    <span className="h6">0</span>
                    <span className="ms-1">Likes</span>
                </div>

                <div className="col-auto">
                    <span className="h6">0</span>
                    <span className="ms-1">Points</span>
                </div>

                </div>
                <p>Christina started his recruitment career on the agency side. Since then, she’s built a career helping customers get the most out of HR technology. She’s currently a Customer Success Specialist at Space and spends her time speaking to in-house recruiters all over the world - helping them solve their recruitment challenges, and get the most out of our talent acquisition software.</p>
            </div>
            </div>
  )
}
