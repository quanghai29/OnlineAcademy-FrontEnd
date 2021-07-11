import React, { useEffect } from "react";
//import classes from './style.module.scss';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Chapter from './Chapter';
import Video from './Video';

export default function Overview() {
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
          <li>
            <div className="collapsible-header">
              <Chapter/>
            </div>
            <div className="collapsible-body">
              <Video/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
};


