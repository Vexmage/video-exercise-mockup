import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  timestamp: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, timestamp }) => (
  <div style={{ marginBottom: '1rem' }}>
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}?start=42`}
      title="Video"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
    <p style={{ fontSize: '0.875rem' }}>Jump to: {timestamp}</p>
  </div>
);

export default VideoEmbed;
