import React, {useEffect, useState} from "react";
import SpeakerDetail from "./SpeakerDetail";
import {Header} from "./Header";
import {Menu} from "./Menu";
import speakerData from "./SpeakerData";

const Speakers = ({}) => {
  const [speakersList, setSpeakersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);
  const speakerListFiltered = isLoading ? [] :
    speakersList.filter(({sat, sun}) => {
      (speakingSaturday && sat) || (speakingSunday && sun)
    })
      .sort((a, b) => {
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;
        return 0;
      });

  useEffect(() => {
    setIsLoading(true);
    new Promise(resolve => {
      setTimeout(() => resolve(), 1000);
    }).then(() => {
        setIsLoading(false);
      });
    setSpeakersList(speakerData);

    return () => console.log("Component will unmount");
  }, []);

  const onHeartFavoriteHandler = (evt, favoriteValue) => {
    evt.preventDefault();
    const sessionId = evt.target.getAttribute("data-session-id");
    setSpeakersList(
      speakersList.map(speaker => {
        return speaker.id === sessionId ?
          {...speaker, favorite: favoriteValue} :
          speaker;
      })
    )
  };

  const onChangeSaturday = (evt) => {
    setSpeakingSaturday(!speakingSaturday);
  };
  const onChangeSunday = (evt) => {
    setSpeakingSunday(!speakingSunday);
  };

  if (isLoading) return <div>Loading</div>;

  return (
    <React.Fragment>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar mt-5 checkbox-bigger">
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"
                       onChange={onChangeSaturday}
                       checked={speakingSaturday} />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input"
                       onChange={onChangeSunday}
                       checked={speakingSunday}/>
                Sunday Speakers
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(speaker => (
              <SpeakerDetail key={speaker.id} {...speaker} onHeartFavoriteHandler={onHeartFavoriteHandler} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Speakers;
