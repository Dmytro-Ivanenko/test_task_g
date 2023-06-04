import { Tweet } from '../';
import styles from './tweetsList.module.scss';

export function TweetsList({ cardArr, onFollow }) {
    return (
        <ul className={styles.cardList}>
            {cardArr.map(item => {
                return (
                    <li className={styles.listItem} key={item.id}>
                        <Tweet card={item} follow={onFollow} />
                    </li>
                );
            })}
        </ul>
    );
}
