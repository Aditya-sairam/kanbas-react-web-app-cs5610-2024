import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Module() {
  const [module, setModule] = useState({
    id: 1,
    name: "Modules",
    description: "Create a NodeJS server with ExpressJS",
    course:"Computer Science"
  });
  const module_API_URL = `${REMOTE_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>MModules Section</h3>
      <h3 id="wd-working-with-objects">working with Modules</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${module_API_URL}/name/${module.name}`}>
        Update name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />


      <h4>Retrieving Modules</h4>
      <a
        id="wd-retrieve-modules"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get module
      </a>
      <hr />
      <h4>Retrieving Name</h4>
      <a
        id="wd-retrieve-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get name
      </a>
      <hr />
    </div>
  );
}
