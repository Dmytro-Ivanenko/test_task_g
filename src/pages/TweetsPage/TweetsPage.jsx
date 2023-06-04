import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { TweetsList } from '../../components';
import { Button, Container } from '../../shared/components';
import { getTweets, changeFollow } from '../../utils/tweetsApi';
import styles from './tweetsPage.module.scss';

export function TweetsPage() {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('get all');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    const options = ['show all', 'follow', 'following'];
    const defaultOption = options[0];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const data = await getTweets({ page, filter });
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

    const loadMore = async () => {
        const newPage = page + 1;
        setPage(newPage);
    };

    const btnFunction = () => {
        navigate(backLinkHref);
    };

    const onFollow = async tweet => {
        const { following, followers, id } = tweet;
        const response = await changeFollow(tweet);

        if (response) {
            const newArr = cards.map(card => {
                if (card.id !== id) {
                    return card;
                }

                return { ...card, following, followers };
            });

            setCards(newArr);
        }
    };

    const onFilter = async ({ value }) => {
        setCards([]);
        setFilter(value);

        if (page !== 1) {
            setPage(1);
            return;
        }

        try {
            setLoading(true);

            const data = await getTweets({ page: 1, filter: value });

            setCards(data);

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Button btnFunction={btnFunction}>Back</Button>

            <h1 className={styles.title}>Tweets</h1>

            <Dropdown
                controlClassName={styles.dropdown}
                menuClassName={styles.dropdownMenu}
                options={options}
                onChange={onFilter}
                value={defaultOption}
                placeholder="Filter"
            />

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
