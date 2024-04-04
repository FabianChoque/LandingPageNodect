import React from "react";
import bases from "../../assets/bases.pdf";

//Display the bases for the competence in pdf 
function Bases() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <object
        data={bases}
        type="application/pdf"
        width="100%"
        height="100%"
      ></object>
    </div>
  );
}

export default Bases;
