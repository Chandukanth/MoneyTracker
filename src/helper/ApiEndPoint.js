import { api_url } from "../../config";

const appApi = (path) => {

    return `${api_url}/${path}`;

};

// API call routes
export const endpoints = () => ({
    userAPI: appApi("user/v1")
});