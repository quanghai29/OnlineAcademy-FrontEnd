export const actionTypes = {
    REQUEST_FETCH_CHAPTERS_OF_COURSE: 'REQUEST_FETCH_CHAPTERS_OF_COURSE',
    REQUEST_FETCH_CHAPTERS_OF_COURSE_DONE: 'REQUEST_FETCH_CHAPTERS_OF_COURSE_DONE',
    REQUEST_FETCH_CHAPTERS_OF_COURSE_FAIL: 'REQUEST_FETCH_CHAPTERS_OF_COURSE_FAIL',
    RESET_CHAPTERS_OF_COURSE: 'RESET_CHAPTERS_OF_COURSE',
    UPLOAD_NEW_CHAPTER: 'UPLOAD_NEW_CHAPTER',
    UPLOAD_NEW_CHAPTER_DONE: 'UPLOAD_NEW_CHAPTER_DONE',
    UPLOAD_NEW_CHAPTER_FAIL: 'UPLOAD_NEW_CHAPTER_FAIL',
    SET_SELECTED_CHAPTER: 'SET_SELECTED_CHAPTER',
    UPDATE_TITLE_CHAPTER: 'UPDATE_TITLE_CHAPTER',
    UPDATE_TITLE_CHAPTER_DONE: 'UPDATE_TITLE_CHAPTER_DONE',
    UPDATE_TITLE_CHAPTER_FAIL: 'UPDATE_TITLE_CHAPTER_FAIL'
}

export const requestFetchChaptersOfCourse = (course_id) => ({
    type: actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE,
    payload: course_id
});

export const requestFetchChaptersOfCourseDone = (chapters) => ({
    type: actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE_DONE,
    payload: chapters
});

export const requestFetchChaptersOfCourseFail = (message) => ({
    type: actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE_FAIL,
    payload: {
        message
    }
});

export const resetChaptersOfCourse = () => ({
    type: actionTypes.RESET_CHAPTERS_OF_COURSE
})

export const uploadNewChapter = (formData) => ({
    type: actionTypes.UPLOAD_NEW_CHAPTER,
    payload: formData
});

export const uploadNewChapterDone = (newChapter) => ({
    type: actionTypes.UPLOAD_NEW_CHAPTER_DONE,
    payload: newChapter
});

export const uploadNewChapterFail = (message) => ({
    type: actionTypes.UPLOAD_NEW_CHAPTER_FAIL,
    payload: {
        message
    }
})

export const setSelectedChapter = (chapter) => ({
    type: actionTypes.SET_SELECTED_CHAPTER,
    payload: chapter
})

export const updateChapterTitle = (formData, id) => ({
    type: actionTypes.UPDATE_TITLE_CHAPTER,
    payload: {
        formData,
        id
    }
});

export const updateChapterTitleDone = (data) => ({
    type: actionTypes.UPDATE_TITLE_CHAPTER_DONE,
    payload: data
});

export const updateChapterTitleFail = (message) => ({
    type: actionTypes.UPDATE_TITLE_CHAPTER_FAIL,
    payload: {
        message
    }
})