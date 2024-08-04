import { useState } from "react";
import VideoPopup from "../common/video-popup";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <section
        className="video__area video-bg tg-jarallax"
        style={{ backgroundImage: `url(/assets/img/bg/video_bg.jpg)` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="video__content text-center">
                {/* <a
                  className="popup-video cursor-pointer"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <i className="flaticon-play"></i>
                </a> */}
                <h2 className="title">
                  JOIN OUR <span>COMMUNITY</span>
                </h2>
                <p>Official Boosters Den Discord Server</p>
                <a
                  href="https://discord.gg/Z3NHg66deV"
                  target="_blank"
                  className="video__btn tg-btn-1"
                >
                  <span>join us!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"ssrNcwxALS4"}
      />
    </>
  );
};

export default VideoArea;
