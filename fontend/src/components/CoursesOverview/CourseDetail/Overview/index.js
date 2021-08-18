import React, { useEffect, useState } from "react";
import classes from './style.module.scss';
import Avartar from '../../../Common/Avartar';
import HtmlToReact from 'html-to-react';


export default function Overview(props) {
  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();
  const [description , setDes] = useState('');
  const [lecDescription, setLecDes] = useState('');

  useEffect(function(){
    if(props.full_description){
      const reactElement = htmlToReactParser.parse(props.full_description);
      setDes(reactElement);
    }
    if(props.lecturer_description){
      const reactElement = htmlToReactParser.parse(props.lecturer_description);
      setLecDes(reactElement);
    }
    // eslint-disable-next-line
  }, [props.full_description])

  return (
    <div className="row">
      <div className="col m4 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Giảng viên</span>
            <div className= "section center-align">
              <Avartar imgSrc={props.lecturer_imgprofile} nickName={props.lecturer_name}/>
              <h6 className={`center-align ${classes.darkfontheader}`}>{props.lecturer_name}</h6>
            </div>
            <div className="section center-align">
              <div className={`center-align ${classes.darkfontheader}`} style={{display:"block"}}>{props.lecturer_headline}</div>
              <p className={`${classes.darkfonttext}`} style={{textAlign: "left", display: "block"}}>{lecDescription}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col m6">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Mô tả chi tiết</span>
            <div className= "section">
              <p style={{display: "block"}} className={`${classes.darkfonttext} ${classes.overwriteMT}`}>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


