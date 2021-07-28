import appAPI from "../redux/axios/course";

export const uploadData = {
    uploadCommonInfo: async (info) => {
        try {
            const { data } = await appAPI.post('/lecturer/course', info);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    uploadImage: async (info) => {
        try {
            const { data } = await appAPI.post('/lecturer/image', info);
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export const getCourses = {
    getLatestCourses: async () => {
        try {
            const { data } = await appAPI.get('/course/10-latest');
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getMostViewCourses: async () => {
        try {
            const { data } = await appAPI.get('/course/10-latest');
            return data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}