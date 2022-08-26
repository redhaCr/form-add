// import Button from "react-bootstrap/Button";
import React from "react";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="col-lg-4 col-lg-4 absolute">
      <div className="tickt">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 96 96"
        >
          <g id="Group_8" data-name="Group 8" transform="translate(-333 -1456)">
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="48"
              cy="48"
              r="48"
              transform="translate(333 1456)"
              fill="#fff"
            />
            <path
              id="incognito"
              d="M13.972,3.843l-3.1,11.351-.049.2C4.865,16.344,1,17.864,1,19.58c0,2.875,10.882,5.208,24.306,5.208s24.306-2.333,24.306-5.208c0-1.715-3.865-3.236-9.826-4.184q-.021-.1-.049-.2L36.639,3.84a3.657,3.657,0,0,0-4.3-2.549,37.322,37.322,0,0,1-7.031.927,37.04,37.04,0,0,1-7.031-.927A3.653,3.653,0,0,0,13.972,3.843Zm.052,13.427a.868.868,0,0,1,.951-.778,102.762,102.762,0,0,0,10.33.5,102.71,102.71,0,0,0,10.33-.5.869.869,0,0,1,.174,1.729c-3.188.323-6.75.5-10.5.5s-7.316-.181-10.5-.5a.868.868,0,0,1-.778-.951ZM9.681,31.733h6.945a1.736,1.736,0,0,1,1.736,1.736v3.472a5.208,5.208,0,1,1-10.417,0V33.469A1.736,1.736,0,0,1,9.681,31.733ZM4.472,33.469a5.222,5.222,0,0,1,.3-1.736h-.3a1.736,1.736,0,0,1,0-3.472H16.625a5.208,5.208,0,0,1,5.167,4.555,12.153,12.153,0,0,1,7.028,0,5.208,5.208,0,0,1,5.167-4.556H46.139a1.736,1.736,0,0,1,0,3.472h-.3a5.222,5.222,0,0,1,.3,1.736v3.472a8.681,8.681,0,0,1-17.361,0v-.486l-.729-.243a8.681,8.681,0,0,0-5.486,0l-.729.243v.486a8.681,8.681,0,0,1-17.361,0Zm29.514-1.736h6.945a1.736,1.736,0,0,1,1.736,1.736v3.472a5.208,5.208,0,1,1-10.417,0V33.469A1.736,1.736,0,0,1,33.986,31.733Z"
              transform="translate(356 1480.791)"
              fill="#0178bc"
              fill-rule="evenodd"
            />
          </g>
        </svg>
        <p className="name">{props.name}</p>
        <p className="mail">E-mail : {props.mail}</p>
        <p className="date">Birthday : {props.date}</p>
        <p className="descr">{props.description}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;