'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export function HeroVideoPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    video.muted = !video.muted;
    if (!video.muted) void video.play();
    setMuted(video.muted);
  };

  return (
    <>
      <video
        ref={ref}
        className="hero-full__video"
        poster="/images/hero-wide-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Bishnoi diamond core bits being made and packed"
      >
        <source src="/videos/hero-wide.mp4?v=audio" type="video/mp4" />
      </video>
      <button
        type="button"
        className="hero-sound"
        onClick={toggle}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        aria-pressed={!muted}
      >
        {muted ? <VolumeX size={18} strokeWidth={1.75} /> : <Volume2 size={18} strokeWidth={1.75} />}
        <span>{muted ? 'Sound on' : 'Mute'}</span>
      </button>
    </>
  );
}
