import Alert from "react-bootstrap/Alert";
import React from "react";

function Alerts(props) {
  return (
    props.alert && (
      <Alert className=" position-absolute w-100" variant={props.alert.var}>
        {props.alert.msg}
      </Alert>
    )
  );
}

export default Alerts;
