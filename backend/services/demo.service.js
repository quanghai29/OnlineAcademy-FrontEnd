const {Code, Message} = require('../helper/statusCode.helper');

//#region Quang Hai MTP

function load() {
    let returnModel = {}; // code; message; data
    try {
        const user = {name:'quang hai', age: 22};

        returnModel = {
            code: Code.Success,
            message: Message.Success,
            data: user
        }
    } catch (err) {
        console.error(err);
        returnModel = {
            code: Code.Internal_Server_Error,
            message: Message.Internal_Server_Error,
            data: null
        }
    } finally {
        return returnModel;
    }
}

//#endregion

module.exports = {
    load
};
