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