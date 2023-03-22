import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    // faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMoon,
    // faMessage,
    faPlus,
    faUser,
    faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import Button from '~/compoments/Button';
import Menu from '~/compoments/Popper/Menu';
import { UploadIcon, UploadIcon2 } from '~/icons';
import Image from '~/compoments/Image';
import Search from '~/compoments/Layout/search';
import routesConfig from '~/routesConfig/routes';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const user_Menu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/kun',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faVideoCamera} />,
        title: 'LIVE studio',
        to: '/studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/loguot',
        separate: true,
    },
];

function Header() {
    const currentUse = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUse ? (
                        <>
                            <Button testtext>
                                <a href="/upload">
                                    <FontAwesomeIcon className={cx('text-icon')} icon={faPlus} />
                                    Tải lên
                                </a>
                            </Button>
                            <Tippy content="Tin Nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hòm Thư" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon2 />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button testtext>
                                <a href="/upload">
                                    <FontAwesomeIcon className={cx('text-icon')} icon={faPlus} />
                                    Tải lên
                                </a>
                            </Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUse ? user_Menu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUse ? (
                            <Image
                                className={cx('user-avatart')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7ef455aad8f139c08d705cac716d179a~c5_100x100.jpeg?x-expires=1679493600&x-signature=ww6mZSwYd1ruxkChLRtjeT5bJ0k%3D"
                                alt="img"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/93cf51229daf4ca2e78d85314fd2f0e5~c5_100x100.jpeg?x-expires=1679493600&x-signature=6lJ2NGnnAM7NFPohbhl99YYjyO8%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
