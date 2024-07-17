import React from 'react';

const VideoSection = ({ videos }) => {
  return (
    <div className="video-section">
      {videos.map((video, index) => (
        <div key={index} className="video">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default VideoSection;
