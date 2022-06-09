import React, { useContext} from 'react'
import { useParams } from "react-router-dom";
import DemoFactory from './DemoFactory';
import { getTopicDetails } from '../lrn-hooks/utils/app-data-utils';
import { AppDataContext } from '../contexts/AppDataContext';

export default function MiniDetail() {
const {path} = useParams();
let title = "";
const appData = useContext(AppDataContext);
const miniData = appData["miniData"];


const miniDetails = miniData["data"].filter(function(item){
    if(typeof item["path"] === "string"){
        if(item["path"] === path){
            title = item["title"];
            return item;
        }
    }else{
        if(item["path"]["link"] === path){
            title = item["title"];
            return item;
        }
    }
});

  return (
    <article className='mt-4'>
    <h2 className='mb-1'>{title}</h2>
    <p className='text-secondary'>Created on {miniDetails[0]["dateCreated"]} by <span className='text-black'>{miniDetails[0]["author"]}</span></p>
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
            <p>{miniDetails[0]["description"]}</p>
            </div>
          </div>
        </div>
      <div className='col-lg-8 mt-2'>
        <div className='card'>
          <div className='card-header'>
            <h6 className='m-0 p-0'><i className='bi bi-app'></i> Demo</h6>
          </div>
          <div className='card-body'>
            <DemoFactory title={path}></DemoFactory>
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
              
          </div>
        </div>
      </div>
      <div className='col-lg-12 mt-2'>
      <div className='card'>
          <div className='card-header'>
            <h6 className='m-0 p-0'><i className='bi bi-markdown'></i> Mardown</h6>
          </div>
          <div className='card-body'>
              {/* <ReactMarkdown>{miniDetails[0]["markdown"]}</ReactMarkdown> */}
          </div>
        </div>
      </div>
    </div>
  </article>
  )
}
