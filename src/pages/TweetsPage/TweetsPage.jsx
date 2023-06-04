import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TweetsList } from '../../components';
import { Button, Container } from '../../shared/components';
import { getAll } from '../../utils/tweetsApi';
import styles from './tweetsPage.module.scss';

export function TweetsPage() {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const data = await getAll({ page });
                const cardsArr = [...cards, ...data];

                setCards(cardsArr);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // eslint-disable-next-line
    }, [page]);

    const loadMore = async () => {
        const newPage = page + 1;
        setPage(newPage);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    const btnFunction = () => {
        navigate(backLinkHref);
    };

    return (
        <Container>
            <Button btnFunction={btnFunction}>Back</Button>

            <h1 className={styles.title}>Tweets</h1>

            <TweetsList cardArr={cards} />

            <BeatLoader className={styles.loader} loading={loading} color="#5736a3" />

            {!loading && cards.length >= 3 && (
                <Button className={`${styles.button}`} btnFunction={loadMore}>
                    Load more
                </Button>
            )}

            <ToastContainer />
        </Container>
    );
}
