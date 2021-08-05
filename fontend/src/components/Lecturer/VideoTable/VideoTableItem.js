import React from 'react'
import classes from './style.module.scss';

const VideoTableItem = ({video}) => {
    return (
        <tr className={classes.videoTableItem}>
          <td className={classes.titleVideo}><span className="material-icons">play_circle_filled</span> {video.title}</td>
          <td className="right-align">{video.duration}:00</td>
          <td className={classes.actionVideo}>
              <button><span className="material-icons">create</span> Sửa tiêu đề</button>
              <button><span className="material-icons">delete_forever</span> Xóa video</button>
            </td>
        </tr>
    )
}

export default VideoTableItem
