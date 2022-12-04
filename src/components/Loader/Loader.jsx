import React from 'react';
import "./Loader.css";
import LoaderImg from '../../images/loader.svg';

const Loader = () => {
  return (
    <div className="loader flex flex-c">
      <img src= {LoaderImg} alt='loader' />
    </div>
  )
}

export default Loader