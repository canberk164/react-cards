import React from "react";

function Course({ title, description }) {
  // console.log(props);
  // const title = props.title;
  // const description = props.description;
  // const { title, description } = props;

  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
}

export default Course;
