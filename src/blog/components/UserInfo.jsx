import styled from "styled-components"

import userService from "../../db/UserService";

export default function UserInfo(props) {
    let author = null
    let badgesEl = <p>Nothing to show here... </p>;
    if(props.author === undefined){
       author = userService.getNullUser();
    }else{
        author = userService.getUser(props.author.value, props.author.key);
    }

    if(author.badges.length > 0){
        badgesEl = author.badges.map(function(badge){
            return <span class={`badge bg-${badge.color} me-1`}>{badge.name}</span>
        })
    }
    const UserImg = styled.img`
        border-radius: 50%;
        border: 3px solid #adb5bd;
        margin: 0 auto;
        padding: 3px;
        width: 100px;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
    `;
  return (
    <>
    <div class="card card-primary card-outline mb-2">
    <div class="card-header">
        <h5 class="card-title">Author</h5>
    </div>
    <div class="card-body box-profile">
        <div class="text-center">
        <UserImg class="profile-user-img img-fluid img-circle" src={author.profileURL} alt="User profile picture"/>
        </div>

        <h3 class="text-center">{author.firstName + " " + author.lastName}</h3>

        <p class="text-muted text-center">{author.publicID}</p>
    </div>
   
    </div>
  


    <div class="card card-primary">
    <div class="card-header bg">
        <h5 class="card-title">Summary</h5>
    </div>
    
    <div class="card-body">
        <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

        <p class="text-muted">{author.address}</p>

        <hr/>

        <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

        <p class="">
        {badgesEl}
        </p>

        <hr/>

        <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

        <p class="text-muted">{author.headline}</p>
    </div>
    </div>
    </>
  )
}
