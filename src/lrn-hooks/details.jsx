import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppDataContext } from '../contexts/AppDataContext';
import DemoFactory from './demos/DemoFactory';
import { getSubtopicDetails, getTopicDetails } from './utils/app-data-utils';
import Gist from '../components/Gist';

export default function HookDetail(props) {
  let {title} = useParams();
  const appData = useContext(AppDataContext);
  
  const topicDetails = getTopicDetails(appData, "React Hooks");
  const subTopicDetails = getSubtopicDetails(topicDetails, title);

  console.log(subTopicDetails)
  if(!subTopicDetails){
    return <article className='mt-4'>Hook cant be found!</article>
  }

  let gist = <Gist id="61c4e4cd6a96dbb8461503c7f340826b" file="README.md"></Gist>

  if(subTopicDetails["gistID"]){{
    gist = <Gist id={subTopicDetails["gistID"]}></Gist>
  }}

  return (
    <article className='mt-4'>
      <h2 className='mb-1'>{title}</h2>
      <p className='text-secondary'>Created on {subTopicDetails["dateCreated"]} by <span className='text-black'>{subTopicDetails["author"]}</span></p>
      <div className='mt-2 mb-2'>
        <hr></hr>
      </div>
      <div className='row'>
        <div className='col-lg-4 mt-2'>
          <div className='card'>
            <div className='card-header'>
                <h6 className='m-0 p-0'><i className='bi bi-info-square'></i> Short Description</h6>
              </div>
              <div className='card-body'>
              <p>{subTopicDetails["description"]}</p>
              </div>
            </div>
          </div>
        <div className='col-lg-8 mt-2'>
          <div className='card'>
            <div className='card-header'>
              <h6 className='m-0 p-0'><i className='bi bi-app'></i> Demo</h6>
            </div>
            <div className='card-body'>
              <DemoFactory title={title} detail={subTopicDetails}></DemoFactory>
            </div>
          </div>
          
        </div>
        <div className='col-lg-12 mt-2'>
        <div className='card'>
            <div className='card-header'>
              <h6 className='m-0 p-0'><i className='bi bi-github'></i> Gist</h6>
            </div>
            <div className='card-body'>
                {/* Deploy widgets here... */}
                {gist}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
