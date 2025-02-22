import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-flow-server-nu.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;