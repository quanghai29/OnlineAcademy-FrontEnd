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
    UPDATE_TITLE_CHAPTER_FAIL: 'UPDATE_TITLE_CHAPTER_FAIL',
    DELETE_CHAPTER: 'DELETE_CHAPTER',
    DELETE_CHAPTER_DONE: 'DELETE_CHAPTER_DONE',
    DELETE_CHAPTER_FAIL: 'DELETE_CHAPTER_FAIL',
    UPLOAD_VIDEO: 'UPLOAD_VIDEO',
    UPLOAD_VIDEO_DONE: 'UPLOAD_VIDEO_DONE',
    UPLOAD_VIDEO_FAIL: 'UPLOAD_VIDEO_FAIL',
    SET_SELECTED_VIDEO: 'SET_SELECTED_VIDEO',
    UPDATE_TITLE_VIDEO: 'UPDATE_TITLE_VIDEO',
    UPDATE_TITLE_VIDEO_DONE: 'UPDATE_TITLE_VIDEO_DONE',
    UPDATE_TITLE_VIDEO_FAIL: 'UPDATE_TITLE_VIDEO_FAIL',
    DELETE_VIDEO: 'DELETE_VIDEO',
    DELETE_VIDEO_DONE: 'DELETE_VIDEO_DONE',
    DELETE_VIDEO_FAIL: 'DELETE_VIDEO_FAIL',
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
});

export const deleteChapterById = (id) => ({
    type: actionTypes.DELETE_CHAPTER,
    payload: id
});

export const deleteChapterByIdDone = (id) => ({
    type: actionTypes.DELETE_CHAPTER_DONE,
    payload: id
});

export const deleteChapterByIdFail = (message) => ({
    type: actionTypes.DELETE_CHAPTER_FAIL,
    payload: {
        message
    }
});

export const uploadVideo = (formData) => ({
    type: actionTypes.UPLOAD_VIDEO,
    payload: formData
});

export const uploadVideoDone = (newVideo) => ({
    type: actionTypes.UPLOAD_VIDEO_DONE,
    payload: newVideo
});

export const uploadVideoFail = (message) => ({
    type: actionTypes.UPLOAD_VIDEO_FAIL,
    payload: {
        message
    }
})

export const setSelectedVideo = (video) => ({
    type: actionTypes.SET_SELECTED_VIDEO,
    payload: video
})

export const updateVideoTitle = (formData, id) => ({
    type: actionTypes.UPDATE_TITLE_VIDEO,
    payload: {
        formData,
        id
    }
});

export const updateVideoTitleDone = (data) => ({
    type: actionTypes.UPDATE_TITLE_VIDEO_DONE,
    payload: data
});

export const updateVideoTitleFail = (message) => ({
    type: actionTypes.UPDATE_TITLE_VIDEO_FAIL,
    payload: {
        message
    }
});

export const deleteVideoById = (id, formData) => ({
    type: actionTypes.DELETE_VIDEO,
    payload: {
        id,
        formData
    }
});

export const deleteVideoByIdDone = (id) => ({
    type: actionTypes.DELETE_VIDEO_DONE,
    payload: id
});

export const deleteVideoByIdFail = (message) => ({
    type: actionTypes.DELETE_VIDEO_FAIL,
    payload: {
        message
    }
});