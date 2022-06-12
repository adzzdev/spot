import React from 'react'
import styled from 'styled-components';
import userService from '../../../db/UserService';
import palletes from "../../../assets/themes/base/palletes";
import breakpoints from "../../../assets/themes/base/breakpoints"

export default function AuthorInfo(props) {
  let author = null
  let badgesEl = <p>Nothing to show here... </p>;
  let linksEl = <></>
  if(props.author === undefined){
      author = userService.getNullUser();
  }else{
      author = userService.getUser(props.author.value, props.author.key);
  }

  if(author.badges.length > 0){
      badgesEl = author.badges.map(function(badge){
          return <span class={`badge bg-${badge.color} me-1`}>{badge.name}</span>
      })
  };

  if(author.links.length > 0){
    linksEl = author.links.map(function(link, i){
      //these 4 sites will be the only rendered icons / links in the autor info widget
      if(link.site === "twitter" || link.site === "google" || link.site === "facebook" || link.site === "github"){
        return (
          <a key={i} href={link.link} target="_blank">
              <i className={`bi bi-${link.site}`}></i>
          </a>
        );
      }
    });
  }
  return (
    <AuthorInfoWidget>
        <Section>
            <ProfilePic className="shadow" src={author.profileURL}/>
            <AuthorName>{author.firstName + " " + author.lastName}</AuthorName>
            <p className="text-secondary mb-4">{author.publicID}</p>
            <Links>
              {linksEl}
            </Links>
            <p className="text-secondary mb-4 mt-4">{author.headline}</p>
        </Section>
        <Divider/>
        <Section>
          <SectionHeading className='text-white'>Summary</SectionHeading>
          <div className='text-start'>
            <strong>
                Location
              </strong>
              <p className='mt-2'>Makati, Philippines</p>
              <hr></hr>

              <strong>
                Role
              </strong>
              <p className='mt-2'>{author.title}</p>
              <hr></hr>


              <strong>
                Skills
              </strong>
              <div>
                {badgesEl}
              </div>
          </div>
            
        </Section>
    </AuthorInfoWidget>
  )
}


/**Hoisted up*/
const AuthorInfoWidget = styled.aside`
    position: sticky;
    top: 1.5rem;
    border: 1px solid #eeee;
    background: ${palletes.dark.c1};
    padding: 30px;
    border-bottom: 1px solid #eeee;
    @media screen and (min-width: ${breakpoints.values.lg}){
      margin: 0px 20px;
    }
`;

//basic info
const Section = styled.section`
    text-align: center;
    display: block;

`;
const ProfilePic = styled.img`
    object-fit: cover;
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;
const AuthorName = styled.h4`
    font-size: 18px;
    color: #000000;
    font-weight: 500;
    margin-top: 1rem;
    text-transform: uppercase;

`;

//--socials
const Links =  styled.div`
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #000000;
    font-size: 1.1rem;
    > a{
      color:  inherit;
      text-decoration: none;
    }
`
//summary

//utils
const Divider = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 1px;
  background: #eeeeee;

`;

const  SectionHeading = styled.h4`
  text-transform: uppercase;
  font-size: 18px;
  padding: 10px 0px;
  text-align:center;
  border-radius: 3px;
  background: linear-gradient(40deg, ${palletes.blue.c2} 0%, ${palletes.blue.c1} 100%);
  margin-bottom: 30px;
`

