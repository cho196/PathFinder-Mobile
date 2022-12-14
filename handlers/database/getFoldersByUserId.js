import axios from "axios";

export async function handleGetFoldersByUserId(userId, cb) {

    try {
        return await axios({
            method: "GET",
            url: `${process.env.NEXT_PUBLIC_HERMES_PATH}/api/db/folders/userid/${userId}`
        })
            .then((response) => {
                console.log(response)
                cb(response)
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error)
    }
}