import { useNavigate, useLocation } from 'react-router-dom';

import { TweetsList } from '../../components';
import { Button, Container } from '../../shared/components';
import styles from './tweetsPage.module.scss';

export function TweetsPage() {
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

            <TweetsList
                cardArr={[
                    {
                        user: 'Joshua_Dach',
                        avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg',
                        tweets: 53,
                        followers: 22,
                        id: '1',
                    },
                ]}
            />
        </Container>
    );
}
