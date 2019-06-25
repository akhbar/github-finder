import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-S{alert.type}`}>
        <i className="fas fa-info-circle"> {alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
