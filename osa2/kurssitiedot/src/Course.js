import React from "react";

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          {course.parts.map((part) => (
            <h4 key={part.id}>{part.name + " " + part.exercises}</h4>
          ))}
          <h3>
            Total of exercises{" "}
            {course.parts
              .map((sub) => sub.exercises)
              .reduce((acc, item) => acc + item, 0)}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Course;
