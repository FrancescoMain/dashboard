import React, { useState } from "react";
import { addToProject } from "../../../redux/projects/projectSlice";
import { useAppDispatch } from "../../../redux/store";

const AddProject = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const handleSend = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(addToProject({ title: title }));
  };

  return (
    <form action="">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        type="text"
      />
      <button onClick={handleSend}>Send</button>
    </form>
  );
};

export default AddProject;
