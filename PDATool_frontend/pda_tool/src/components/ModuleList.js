

import React, {Fragment} from 'react';
import ModuleSimple from './ModuleSimple.js';
import {MDBListGroup, MDBListGroupItem} from "mdbreact";

// renders all modules from list inherited from container's state.
// under each module there'll be an edit button/link
const ModuleList = (props) => {
  const modules = props.data.map((module, index) => {
    return (


      <div>

      <MDBListGroup className="my-1 mx-1" style={{ width: "99%" }} position= "relative">
        <MDBListGroupItem>
        <ModuleSimple
          key={index}
          unit={module.unit}
          reference={module.reference}
          evidenceRequired={module.evidenceRequired}
          weekNumber={module.weekNumber}
          answerId={module.answerId}
          imageEvidence={module.imageEvidence}
          textEvidence={module.textEvidence}
          kanbanStatus={module.kanbanStatus}
        />
        </MDBListGroupItem>
      </MDBListGroup>

      </div>
    )
  });

  return (
    <Fragment>

            {modules}


    </Fragment>
  );

}

export default ModuleList;
