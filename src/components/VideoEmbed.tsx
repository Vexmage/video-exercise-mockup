import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  timestamp: string; // Format: "mm:ss" or "m:ss"
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, timestamp }) => {
  const startSeconds = parseTimestamp(timestamp);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?start=${startSeconds}`}
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <p style={{ fontSize: '0.875rem' }}>Jump to timestamp: {timestamp}</p>
    </div>
  );
};

function parseTimestamp(ts: string): number {
  const parts = ts.split(':').map(Number);
  if (parts.length === 2) {
    const [min, sec] = parts;
    return min * 60 + sec;
  }
  if (parts.length === 3) {
    const [hr, min, sec] = parts;
    return hr * 3600 + min * 60 + sec;
  }
  return 0;
}

export default VideoEmbed;
