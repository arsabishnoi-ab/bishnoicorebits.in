export function HeroVideo() {
  return (
    <div className="hero-media hero-media--portrait">
      <video
        className="hero-media__video"
        poster="/images/hero-vertical-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Bishnoi diamond core bits being made and packed"
      >
        <source src="/videos/hero-vertical.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
