import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://64031879302b5d671c46cd96.mockapi.io/api';

const toastParams = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
};

export const getAll = async ({ page, limit = 3 }) => {
    try {
        const { data } = await axios.get('/users', {
            params: {
                page,
                limit,
            },
        });

        if (data.length === 0) {
            toast.warn('There are no tweets', toastParams);
        }
        return data;
    } catch (error) {
        toast.error('Error. Try again later.', toastParams);
    }
};

export const follow = async card => {
    try {
        const { data } = await axios.put(`/users/${card.id}`, card);

        data.following
            ? toast.success('You have added a new follow.', toastParams)
            : toast.success('You have unfollowed.', toastParams);

        return data;
    } catch (error) {
        toast.error('Error. Try again later.', toastParams);
    }
};
