import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://64031879302b5d671c46cd96.mockapi.io/api';

export const getAll = async ({ page, limit = 3 }) => {
    try {
        const { data } = await axios.get('/users', {
            params: {
                page,
                limit,
            },
        });

        if (data.length === 0) {
            toast.warn('There are no tweets', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
        return data;
    } catch (error) {
        toast.error('Error. Try again later.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }
};
