function VideoBackground() {
  return (
    <video
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      autoPlay
      loop
      muted
    >
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoBackground;
