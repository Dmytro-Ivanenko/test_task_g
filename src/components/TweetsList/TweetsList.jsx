import PropTypes from 'prop-types';

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

TweetsList.propTypes = {
    cardArr: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            tweets: PropTypes.number.isRequired,
            followers: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            following: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onFollow: PropTypes.func.isRequired,
};
