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

export const getTweets = async ({ page, limit = 3, filter }) => {
    let params = {
        page,
        limit,
    };

    switch (filter) {
        case 'follow':
            params = { ...params, following: false };
            break;

        case 'following':
            params = { ...params, following: true };
            break;

        default:
            break;
    }

    try {
        const { data } = await axios.get('/users', {
            params,
        });

        if (data.length === 0) {
            toast.warn('There are no tweets', toastParams);
        }
        return data;
    } catch (error) {
        toast.error('Error. Try again later.', toastParams);
    }
};

export const changeFollow = async card => {
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
