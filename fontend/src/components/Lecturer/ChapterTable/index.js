import React from 'react';
import { useSelector } from 'react-redux';
import ChapterTableItem from './ChapterTableItem';
import classes from './styles.module.scss';

const ChapterTable = () => {
  const { data } = useSelector((state) => state.chaptersOfCourse);
  console.log(data);

  return (
    <div className={classes.chapterTable}>
      {data.map((chapter) => (
        <ChapterTableItem key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
};

export default ChapterTable;
