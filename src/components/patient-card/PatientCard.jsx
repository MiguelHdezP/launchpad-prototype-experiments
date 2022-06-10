import React, { useState, useEffect } from "react";
import "./PatientCard.scss";

export default function PatientCard(props) {
  const {
    patientName,
    patientInfo1,
    patientInfo2,
    patientInfo3,
    patientInfo4,
    newPatient,
    toggleModalEmailRead,
  } = props;
  const [toggleNewMessage, setToggleNewMessage] = useState(newPatient);

  useEffect(() => {
    setToggleNewMessage(newPatient);
  }, [newPatient]);

  const handleClick = () => {
    toggleModalEmailRead();
    setToggleNewMessage(false);
  };
  return (
    <article>
      <div
        className="patientCard-article1"
        onClick={() => (newPatient ? handleClick() : "")}
      >
        <h1>
          {toggleNewMessage ? <span className="circle-email"></span> : ""}
          {patientName}
        </h1>
        <p>{patientInfo1}</p>
        <p>{patientInfo2}</p>
      </div>
      <div className="patientCard-article2">
        <p>{patientInfo3}</p>
        <p>{patientInfo4}</p>
      </div>
    </article>
  );
}
