import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TweetsList } from '../../components';
import { Button, Container } from '../../shared/components';
import { getAll, follow } from '../../utils/tweetsApi';
import styles from './tweetsPage.module.scss';

//Component
export function TweetsPage() {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const data = await getAll({ page });
                const cardsArr = [...cards, ...data];

                setCards(cardsArr);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line
    }, [page]);

    //Load more button
    const loadMore = async () => {
        const newPage = page + 1;
        setPage(newPage);
    };

    // Back button
    const btnFunction = () => {
        navigate(backLinkHref);
    };

    //Follow button
    const onFollow = async tweet => {
        const response = await follow(tweet);

        if (response) {
            const newArr = cards.map(card => {
                if (card.id !== tweet.id) {
                    return card;
                }

                return { ...card, following: tweet.following };
            });

            setCards(newArr);
        }
    };

    return (
        <Container>
            <Button btnFunction={btnFunction}>Back</Button>

            <h1 className={styles.title}>Tweets</h1>

            <TweetsList cardArr={cards} onFollow={onFollow} />

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
