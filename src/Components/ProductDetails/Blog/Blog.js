import React, { useEffect, useState } from 'react';
import './Blog.css'

import Option from '../../Option/Option';
import Colors from '../Colors/Colors';
import Personalize from '../Personalize/Personalize';


const Blog = () => {


    const [choiceMain, setChoiceMain] = useState('base');
    const [Data,setData] = useState([]);
    const [url, setUrl] = useState('base.json');
  
  
    useEffect(()=>{
      console.log('inside useeffect ' +choiceMain + ' ' + url )
      fetch(url)
      .then(res => res.json())
      .then(data => {setData(data);})
    },[choiceMain]);
  
  
    const handleChoice = choic =>{
      setChoiceMain(choic);
      
        if (choic === 'color') {
          setUrl('color.json');
        }
        else if(choic === 'base'){
          setUrl('Base.json');
        }
        else{
          setUrl('Personalize.json');
        }
    }
  



    return (
        <div className="choice-body">
          <div className='Button-container'>
            <button className='button_main' onClick={()=>handleChoice('base')}>Base</button>
            <button className='button_main' onClick={()=>handleChoice('color')}>Color</button>
            <button className='button_main' onClick={()=>handleChoice('perso')}>Personalize</button>
          </div>
          <div>
            <div className='choice-type'>
                <button>button name api thake</button> 
            </div>
            <div className='choice-name'>
              <span>{(choiceMain== 'base')? 'Size api thake':(choiceMain == 'color')? 'binding':'thumlogo'}</span> <br></br>
              <span>required or help api thake</span>
            </div>
            <div>
              <p>{url}</p>
            {(choiceMain == 'base')? <Option data= {Data}></Option>:(choiceMain == 'color')? <Colors colors = {Data}></Colors>:
            <Personalize data = {Data}></Personalize>
            }
            </div>
          </div>
        </div>
      );
    }

export default Blog;