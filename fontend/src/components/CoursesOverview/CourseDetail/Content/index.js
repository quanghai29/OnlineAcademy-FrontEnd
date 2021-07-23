import React, { useEffect } from "react";
//import classes from './style.module.scss';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Chapter from './Chapter';
import Video from './Video';

export default function Content(props) {
  console.log(props);
  useEffect(function () {
    initCollapsible();
  })

  const initCollapsible = () => {
    const elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }
  return (
    <div className="row">
      <div className="col m10 offset-m1">
        <ul className="collapsible popout">
          {
            props.chapters &&
            props.chapters.map(chapter =>
              <li key= {chapter.id}>
                <div className="collapsible-header">
                  <Chapter {...chapter}/>
                </div>
                <div className="collapsible-body">
                  <Video />
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
};


