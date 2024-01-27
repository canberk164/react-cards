import React from "react";

function Course({ image, title, description }) {
  // console.log(props);
  // const title = props.title;
  // const description = props.description;
  // const { title, description } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image.is-4by3">
          <img src={image} alt="My Courses" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
        </div>
      </div>
    </div>
    // <>
    //   <img src={image} alt="" />
    //   <div>{title}</div>
    //   <div>{description}</div>
    // </>
  );
}

export default Course;
