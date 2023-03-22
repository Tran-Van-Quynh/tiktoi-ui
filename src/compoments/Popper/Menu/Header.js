import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Menu({ title, onBack }) {
    return (
        <header className={cx('header')} onClick={onBack}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('heacer-title')}>{title}</h4>
        </header>
    );
}

export default Menu;
