import React from "react";

const Total = (props) => {
  console.log(props);
  return (
    <div>
      Number of exercises{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </div>
  );
};

export default Total;
