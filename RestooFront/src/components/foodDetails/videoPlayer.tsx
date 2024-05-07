import { useState } from "react";
import videoImg from "../../assets/images/thumb/food-video.png";

function VideoPlayer() {
  const [player, setPlayer] = useState<boolean | string>(false);
  return (
    <div className="vedio-img">
      <img src={videoImg} alt="img" />
      {player ? (
        <div className="video-player">
          <i
            className="fa-solid fa-x closeBtn"
            onClick={() => setPlayer(false)}
          ></i>
          <div className="responsive-iframe">
            <iframe
              width="560"
              height="315"
              src={`${player}?autoplay=1`}
              title="YouTube video player"
              frameBorder={0}
              allowFullScreen={true}
              allow=" autoplay=1; "
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className="videoPlayBtn"
        onClick={() =>
          setPlayer(
            "https://www.youtube.com/embed/tJlzIJaokVY?si=1vJRrTjuZZkDnP5b"
          )
        }
      >
        <i className="fa-solid fa-play "></i>
      </div>
    </div>
  );
}

export default VideoPlayer;
