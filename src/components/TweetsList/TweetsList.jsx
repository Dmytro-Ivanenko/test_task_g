import { Tweet } from '../';
import styles from './tweetsList.module.scss';

export function TweetsList({ cardArr }) {
    return (
        <ul className={styles.cardList}>
            {cardArr.map(item => {
                return (
                    <li key={item.id}>
                        <Tweet card={item} />
                    </li>
                );
            })}
        </ul>
    );
}
