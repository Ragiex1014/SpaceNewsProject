import React from "react";
import "./card.css";
const Card = ({ title, image_url, url, summary, updated_at }) => {
  return (
    <article>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`${image_url}`}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{summary}</p>
              <a href={url}>
                {" "}
                <button className="btn btn-primary">Read more</button>
              </a>
              <p className="card-text">
                <small className="text-body-secondary">
                  <b> {`Update at: ${updated_at.split("T")[0]}`}</b>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
