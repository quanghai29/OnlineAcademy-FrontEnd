import React, { useEffect } from "react";
import './CourseDetail.module.scss';
import './style.css';
import M from 'materialize-css/dist/js/materialize.min.js';

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
            <div className="collapsible-header"><i className="material-icons">expand_more</i>
              First
            </div>
            <div className="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">expand_more</i>Second</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
          <li>
            <div className="collapsible-header"><i className="material-icons">expand_more</i>Third</div>
            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
          </li>
        </ul>

      </div>
    </div>
  )
};


