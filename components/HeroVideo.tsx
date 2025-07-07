import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const VIMEO_ID = '1098597684';

const HeroVideo: React.FC = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [hidePoster, setHidePoster] = useState(false);
  const [fadePoster, setFadePoster] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${VIMEO_ID}`)
      .then(async res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        try { return await res.json(); }
        catch (e) { throw new Error('Failed to parse JSON from Vimeo oEmbed API'); }
      })
      .then(data => setThumbnail(data.thumbnail_url))
      .catch(err => {
        console.error('Failed to fetch Vimeo thumbnail:', err);
        setThumbnail(null);
      });
  }, []);

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      const fadeOutPoster = () => {
        setFadePoster(true);
        setTimeout(() => setHidePoster(true), 1200); // 1.2s fade
      };
      player.on('play', fadeOutPoster);
      player.on('timeupdate', fadeOutPoster);
    }
  }, [iframeRef.current]);

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
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          position: 'relative',
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default HeroVideo;
