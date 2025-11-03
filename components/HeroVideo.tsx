import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const VIMEO_ID = '1098597684';

const HeroVideo: React.FC = () => {
  const thumbnail = '/video/video-poster.jpg';
  const [hidePoster, setHidePoster] = useState(false);
  const [fadePoster, setFadePoster] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // The thumbnail fetching logic is removed as per the edit hint.
  }, []);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    const fadeOutPoster = () => {
      setFadePoster(true);
      setTimeout(() => setHidePoster(true), 1200); // 1.2s fade
    };
    player.on('play', fadeOutPoster);
    player.on('timeupdate', fadeOutPoster);

    // Cleanup
    return () => {
      player.off('play', fadeOutPoster);
      player.off('timeupdate', fadeOutPoster);
    };
  }, []);

  return (
    <div className="hero-video-container" >
      {!hidePoster && thumbnail && (
        <img
          src={thumbnail}
          alt="Video Poster"
          className="ImgPoster"
          style={{
            opacity: fadePoster ? 0 : 1,
          }}
        />
      )}
      <iframe
        ref={iframeRef}
        src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&muted=1&background=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; web-share"
        className="HeroVideo"
        title="IDR"
      />
    </div>
  );
};

export default HeroVideo;
