import React from 'react';

function VideoPlayer({ src }) {
  return (
    <div className="video-player">
      <video controls className="w-full">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;