
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxios';


const useAllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allUser = [], isLoading,  refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-users');
            return res.data;
        }
    })
    return [allUser, isLoading, refetch]
};

export default useAllUsers;