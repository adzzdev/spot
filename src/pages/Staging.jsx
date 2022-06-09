import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import SampleForm from '../components/__samples/SampleForm';
import SampleMoment from "../components/__samples/SampleMoment";
import {SampleButtonHOC} from "../components/__samples/SampleHOC"
import { SampleMarkdown_2 } from '../components/__samples/SampleMarkdown';
import { useEffect, useState } from 'react';
import DemoFactory from '../lrn-hooks/demos/DemoFactory';

import markdown1 from "../assets/markdown/blog/2022060201.md"
import styled from 'styled-components';


const SampleA = ({ children, ...props }) => (
    <div className='card'>
      <div className='card-body'>
        <div className='card-body' {...props}> 
          {children}
          </div>
      </div>
      
    </div>
);

const Sample = ()=>{
    return <DemoFactory title="useLocalStorage" />;
}
export default function Staging() {
  console.log(markdown1);

  const [post, setPost] = useState('');

  useEffect(() => {
      import(`../assets/markdown/blog/2022060201.md`)
          .then(res => {
              fetch(res.default)
                  .then(res => res.text())
                  .then(res => setPost(res))
                  .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
  });
  return (
    <div className='container mt-4'>
      <div className='row'>
      <div className="col-lg-6 mb-2">
        <div className='card'>
          <div className='card-header'>
            react-syntax-highligter
          </div>
          <div className='card-body'>
            <SyntaxHighlighter language="js">
              {`useEffect(() => {
                  import(\`../assets/markdown/blog/2022052901.md\`)
                      .then(res => {
                          fetch(res.default)
                              .then(res => res.text())
                              .then(res => setPost(res))
                              .catch(err => console.log(err));
                      })
                      .catch(err => console.log(err));
              });`}
              </SyntaxHighlighter>
              <br></br>
              <SyntaxHighlighter language="node">
              {`npm install sample`}
              </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-2">
        <div className='card'>
          <div className='card-header'>
            Sample Form
          </div>
          <div className='card-body'>
            <SampleForm></SampleForm>
          </div>
        </div>
      </div>

      <div className="col-lg-6  mb-2">
        <div className='card'>
          <div className='card-header'>
            Moment.js
          </div>
          <div className='card-body'>
            <SampleMoment></SampleMoment>
          </div>
        </div>
      </div>

      <div className="col-lg-6  mb-2">
        <div className='card'>
          <div className='card-header'>
            Sample HOC
          </div>
          <div className='card-body'>
            <SampleButtonHOC>
              Sample Button HOC HEHE
            </SampleButtonHOC>
          </div>
        </div>
      </div>

      <div className="col-lg-12  mb-2">
        <div className='card'>
          <div className='card-header'>
            Sample react-markdown
          </div>
          <div className='card-body'>
            <SampleMarkdown_2 content={post} 
              options={{
                  overrides: {
                      Sample: {
                          component: Sample
                      },
                  },
              }}></SampleMarkdown_2>
            <p>
              {}
            </p>
          </div>
        </div>
      </div>


      </div>
    </div>
  )
}
