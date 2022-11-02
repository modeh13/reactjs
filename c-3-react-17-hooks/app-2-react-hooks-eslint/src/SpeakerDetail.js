import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const SpeakerDetail = ({id, firstName, lastName, favorite, bio, onHeartFavoriteHandler}) => {
  return (
    <div className="card col-4 cardAdmin">
      <ImageToggleOnScroll className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        alt={`${firstName} ${lastName}`}/>
      <div className="card-body">
        <h4 className="card-title">
          <button data-session-id={id}
            className={favorite ? "heart-red-button" : "heart-dark-button"}
            onClick={evt => onHeartFavoriteHandler(evt, !favorite)}>
          </button>
          <span>{firstName} {lastName}</span>
        </h4>
        <span>{bio}</span>
      </div>
    </div>
  );
};

export default SpeakerDetail;
