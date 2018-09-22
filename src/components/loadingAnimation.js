import React from 'react';
import '../assets/styles/loading.css';

export default () => {
  return (<div className="loading-animation h-75 d-flex align-items-center justify-content-center">
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>)
  
  
}
