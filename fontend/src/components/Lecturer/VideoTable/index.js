import React from 'react';
import VideoTableItem from './VideoTableItem';

const VideoTable = ({ videos }) => {
  return (
    <table>
      <tbody>
        {videos.map((video) => (
          <VideoTableItem key={video.id} video={video} />
        ))}
      </tbody>
    </table>
  );
};

export default VideoTable;
