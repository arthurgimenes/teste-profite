import React from 'react'
import { NavLink } from "react-router-dom";
import Languages from './languages/Languages'


class Navbar extends React.Component {
    constructor(){
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <nav className="container nav-mob">
                        <div className="centralize-mob">
                            <div className="logo">
                                <NavLink to='./'>
                                    <svg width="107" height="30" viewBox="0 0 107 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5584 6.71101C19.6677 7.21887 19.0264 7.87183 18.5988 8.70617C18.1712 9.50423 17.9575 10.3386 17.9575 11.2092V23.9057H23.7651V11.6082C23.7651 10.8827 24.157 10.52 24.9409 10.52H27.8982L29.0383 5.94921H23.9076C22.5537 5.94921 21.4136 6.20315 20.5584 6.71101ZM59.8938 23.9057H65.7015V8.37969H59.8938V23.9057ZM14.6795 7.54534C13.5037 6.45707 11.9716 5.94921 10.0476 5.94921C8.30176 5.94921 4.73877 5.94922 -4.34935e-06 5.98549C-4.34935e-06 7.11004 -4.34935e-06 30 -4.34935e-06 30H5.80767V23.8694C9.22814 24.0871 12.613 23.5429 14.6795 21.2213C15.3921 20.4595 15.9266 19.6252 16.1403 18.5369C16.3541 17.4486 16.461 17.4123 16.461 15.8162V14.1838C16.461 12.5877 16.3541 11.2817 16.1403 10.1935C15.9266 9.14148 15.4277 8.23458 14.6795 7.54534ZM10.4752 18.2104C10.0476 18.9359 9.1925 19.5889 8.01672 19.5889C6.30648 19.5889 5.77204 19.5526 5.77204 19.5526V10.4111L6.12834 10.266C6.9122 10.266 8.15924 10.2297 8.90746 10.2297C10.689 10.2297 11.1522 11.5357 11.1522 14.4377C11.1522 16.1427 10.9027 17.4849 10.4752 18.2104ZM49.8462 0.761789C48.9555 1.26965 48.3141 1.92261 47.8866 2.75695C47.459 3.55502 47.2452 4.38936 47.2452 5.25998V23.9057H53.0529V12.5514H57.3997V8.37969H53.0529V5.65901C53.0529 4.93349 53.4448 4.57074 54.2287 4.57074H57.3997V2.21409e-06H53.1598C51.8415 2.21409e-06 50.7369 0.253929 49.8462 0.761789ZM43.3616 8.19831C42.6846 7.54535 41.8651 7.00121 40.8318 6.56591C39.8342 6.1306 38.6228 5.91294 37.1976 5.91294C35.7724 5.91294 34.5966 6.1306 33.5633 6.56591C32.5657 7.00121 31.7106 7.54535 31.0693 8.19831C30.5348 8.74245 30.1429 9.32285 29.8222 9.90326C29.5015 10.5199 29.2878 11.2092 29.1809 12.0073C29.0384 12.8053 29.0027 13.7848 29.0027 15.0181C29.0027 16.2515 29.074 17.231 29.1809 18.029C29.3234 18.8271 29.5372 19.5163 29.8222 20.133C30.1429 20.7497 30.5348 21.2938 31.0693 21.838C32.5657 23.3615 34.6322 24.1233 37.1976 24.1233C39.7629 24.1233 41.7938 23.3615 43.3259 21.838C44.1098 21.0399 44.6442 20.133 44.9649 19.1536C45.2499 18.1741 45.4281 16.7956 45.4281 15.0181C45.4281 13.2769 45.2856 11.8984 44.9649 10.919C44.7155 9.90327 44.1454 8.99638 43.3616 8.19831ZM39.4779 17.4123C39.371 17.9565 39.1572 18.3918 38.8009 18.7183C38.4446 19.0447 37.9458 19.2261 37.2332 19.2261C36.5562 19.2261 36.0218 19.0447 35.6655 18.7183C35.3092 18.3918 35.0954 17.9202 34.9885 17.3398C34.8816 16.7594 34.8104 15.9976 34.8104 15.0544C34.8104 14.1112 34.8816 13.3495 34.9885 12.7328C35.0954 12.1524 35.3092 11.6808 35.6655 11.3543C36.0218 11.0278 36.5562 10.8464 37.2332 10.8464C37.9102 10.8464 38.4446 11.0278 38.8009 11.3543C39.1572 11.6445 39.371 12.0798 39.4779 12.6602C39.5848 13.2406 39.6561 14.0387 39.6561 15.0544C39.6204 16.0339 39.5848 16.8319 39.4779 17.4123ZM65.6658 2.21409e-06H59.8226V4.53446H65.6658V2.21409e-06ZM78.1007 12.5514V8.37969H73.932V1.55985L68.1243 3.11971V18.6457C68.1243 19.5163 68.3381 20.3507 68.7657 21.1487C69.1932 21.9468 69.8345 22.636 70.7253 23.1439C71.616 23.6518 72.7206 23.9057 74.0389 23.9057H78.1007V19.3349H75.1078C74.3239 19.3349 73.932 18.9722 73.932 18.2467V12.5514H78.1007Z" fill="black"/>
                                        <path d="M106.391 14.5103L93.8136 1.74125C92.9228 0.834357 91.2126 0.181399 89.9655 0.181399H82.6614C81.4144 0.181399 80.2386 1.08829 80.2386 2.35794V9.83074C80.2386 10.7739 80.7018 11.9347 81.2362 12.8779C81.5213 10.9916 82.3051 9.46797 83.4809 8.27087C85.0486 6.67474 87.1152 5.87668 89.6805 5.87668C91.462 5.87668 93.0297 6.23944 94.3124 7.00123C95.5951 7.76301 96.664 8.74247 97.3409 10.0121C98.0179 11.2818 98.4098 12.7328 98.4098 14.3289V16.9045H86.8657C86.8657 17.63 87.1508 18.2467 87.7565 18.7908C88.3622 19.335 89.1817 19.5526 90.215 19.5526C91.177 19.5526 91.9252 19.4075 92.4953 19.1899C93.0297 18.9722 93.5998 18.5732 94.1342 18.0653L97.626 21.2938C96.5927 22.2733 95.5238 22.9988 94.4193 23.4341C93.7067 23.7243 92.8872 23.9057 91.9252 24.0145L94.5618 26.6989C94.9537 27.098 95.5594 27.3519 96.1295 27.3519C96.6996 27.3519 97.3053 27.098 97.7328 26.6989L106.355 17.8477C106.747 17.4486 106.997 16.8319 106.997 16.2153C107.032 15.526 106.783 14.9456 106.391 14.5103Z" fill="#FF9F1C"/>
                                        <path d="M91.2841 10.6651C90.8566 10.4112 90.3221 10.2661 89.6808 10.2661C89.0395 10.2661 88.505 10.4112 88.0774 10.6651C87.6499 10.919 87.3292 11.318 87.1867 11.7171C86.9729 12.1161 86.866 12.4426 86.866 13.1681H92.5312C92.5312 12.4426 92.4243 12.1161 92.2105 11.7171C92.0324 11.3543 91.7117 10.919 91.2841 10.6651Z" fill="#FF9F1C"/>
                                    </svg>      
                                </NavLink>
                            </div>
                            <div className="menu-mobile">
                            <span className="line line-1"></span>
                            <span className="line line-2"></span>
                            <span className="line line-3"></span>
                        </div>
                        </div>
                        <div className="items">
                            <div className="search">
                                <input placeholder="O que está procurando?"/>
                                <button className="btn-search">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z" fill="#011627"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="icons">
                                <div className="login">
                                    <a className="account">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 2.70001C10.494 2.70001 11.7 3.90601 11.7 5.40001C11.7 6.89401 10.494 8.10001 9 8.10001C7.506 8.10001 6.3 6.89401 6.3 5.40001C6.3 3.90601 7.506 2.70001 9 2.70001ZM9 15.48C6.75 15.48 4.761 14.328 3.6 12.582C3.627 10.791 7.2 9.81 9 9.81C10.791 9.81 14.373 10.791 14.4 12.582C13.239 14.328 11.25 15.48 9 15.48Z" fill="#011627"/>
                                        </svg>
                                        {Languages.map((idioma) => {
                                            return (
                                                <div>
                                                {console.log(idioma.ID_LINGUA == this.props.active_language ? idioma.TEXT_MY_ACCOUNT: '')}
                                                {/* {idioma.EN == this.props.active_language ? idioma.EN.TEXT_MY_ACCOUNT : 'Minha conta'} */}
                                                {idioma.ID_LINGUA == this.props.active_language ? idioma.TEXT_MY_ACCOUNT: ''}
                                                </div>
                                            )
                                        })}
                                    </a>
                                </div>
                                <div className="cart">
                                    <a className="cart-icons">
                                        <svg width="37" height="18" viewBox="0 0 37 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39704 14.4C4.40761 14.4 3.60706 15.21 3.60706 16.2C3.60706 17.19 4.40761 18 5.39704 18C6.38648 18 7.19602 17.19 7.19602 16.2C7.19602 15.21 6.38648 14.4 5.39704 14.4Z" fill="#011627"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3918 14.4C13.4023 14.4 12.6018 15.21 12.6018 16.2C12.6018 17.19 13.4023 18 14.3918 18C15.3812 18 16.1908 17.19 16.1908 16.2C16.1908 15.21 15.3812 14.4 14.3918 14.4Z" fill="#011627"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.54984 11.475L5.57682 11.367L6.38636 9.89997H13.0875C13.7622 9.89997 14.3558 9.53097 14.6616 8.97297L18.1337 2.66399L16.5686 1.79999H16.5596L15.5701 3.59999L13.0875 8.09998H6.77314L6.65621 7.85698L4.64136 3.59999L3.78684 1.79999L2.94132 0H0V1.79999H1.79897L5.03713 8.63098L3.82282 10.836C3.6789 11.088 3.59795 11.385 3.59795 11.7C3.59795 12.69 4.40749 13.5 5.39692 13.5H16.1908V11.7H5.77471C5.65778 11.7 5.54984 11.601 5.54984 11.475Z" fill="#011627"/>
                                            <circle cx="30" cy="9" r="7" fill="#2EC4B6"/>
                                            <path d="M27.9 6.51C28.2867 6.35667 28.6733 6.16 29.06 5.92C29.4533 5.68 29.8 5.39667 30.1 5.07H30.95V12H29.74V6.69C29.56 6.83 29.3333 6.96667 29.06 7.1C28.7867 7.23333 28.5233 7.34333 28.27 7.43L27.9 6.51Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className="countries">
                                    <div onClick={() => this.props.language('PT')} className="country brazil">
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H23.2C24.3046 0 25.2 0.895431 25.2 2V16C25.2 17.1046 24.3046 18 23.2 18H2C0.895431 18 0 17.1046 0 16V2Z" fill="white"/>
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="18">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H23.2C24.3046 0 25.2 0.895431 25.2 2V16C25.2 17.1046 24.3046 18 23.2 18H2C0.895431 18 0 17.1046 0 16V2Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H25.2V18H0V0Z" fill="#05AB41"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.26501 9.55974C2.85901 9.29703 2.85901 8.70302 3.26501 8.44031L12.2378 2.63437C12.4582 2.49176 12.7418 2.49176 12.9622 2.63437L21.935 8.44031C22.341 8.70302 22.341 9.29703 21.935 9.55974L12.9622 15.3657C12.7418 15.5083 12.4582 15.5083 12.2378 15.3657L3.26501 9.55974Z" fill="#FDD216"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 13.2C14.9196 13.2 16.8 11.3196 16.8 8.99999C16.8 6.68039 14.9196 4.79999 12.6 4.79999C10.2804 4.79999 8.39999 6.68039 8.39999 8.99999C8.39999 11.3196 10.2804 13.2 12.6 13.2Z" fill="#053087"/>
                                            <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="8" y="4" width="9" height="10">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 13.2C14.9196 13.2 16.8 11.3196 16.8 8.99999C16.8 6.68039 14.9196 4.79999 12.6 4.79999C10.2804 4.79999 8.39999 6.68039 8.39999 8.99999C8.39999 11.3196 10.2804 13.2 12.6 13.2Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask1)">
                                            <path d="M7.90196 7.90227C8.56139 7.36828 10.6893 7.87414 12.6757 8.40401C14.662 8.93388 16.7337 10.0445 17.2612 10.6959" stroke="white" stroke-width="1.33333" strokeLinecap="square"/>
                                            </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div onClick={() => this.props.language('ES')} className="country spanish">
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.600006 2C0.600006 0.895431 1.49544 0 2.60001 0H23.8C24.9046 0 25.8 0.895431 25.8 2V16C25.8 17.1046 24.9046 18 23.8 18H2.60001C1.49544 18 0.600006 17.1046 0.600006 16V2Z" fill="white"/>
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="18">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.600006 2C0.600006 0.895431 1.49544 0 2.60001 0H23.8C24.9046 0 25.8 0.895431 25.8 2V16C25.8 17.1046 24.9046 18 23.8 18H2.60001C1.49544 18 0.600006 17.1046 0.600006 16V2Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.600006 4.8H25.8V0H0.600006V4.8Z" fill="#DD172C"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.600006 18H25.8V13.2H0.600006V18Z" fill="#DD172C"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.600006 13.2H25.8V4.79999H0.600006V13.2Z" fill="#FFD133"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 8.40001H8.4V9.00001H7.2V8.40001Z" fill="#FFEDB1"/>
                                            <path d="M6.09235 8.49434C6.07615 8.3 6.22952 8.13332 6.42453 8.13332H7.97546C8.17048 8.13332 8.32384 8.3 8.30765 8.49434L8.16747 10.1765C8.12554 10.6796 7.70491 11.0667 7.2 11.0667C6.69508 11.0667 6.27446 10.6796 6.23252 10.1765L6.09235 8.49434Z" stroke="#A41517" stroke-width="0.666667"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 9H8.4V9.6H7.8L7.2 10.8L6.6 9.6H6V9Z" fill="#A41517"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.2 7.80001C4.2 7.46864 4.46863 7.20001 4.8 7.20001C5.13137 7.20001 5.4 7.46864 5.4 7.80001V10.8C5.4 11.1314 5.13137 11.4 4.8 11.4C4.46863 11.4 4.2 11.1314 4.2 10.8V7.80001Z" fill="#A41517"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.80001C9 7.46864 9.26863 7.20001 9.6 7.20001C9.93137 7.20001 10.2 7.46864 10.2 7.80001V10.8C10.2 11.1314 9.93137 11.4 9.6 11.4C9.26863 11.4 9 11.1314 9 10.8V7.80001Z" fill="#A41517"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6.96C6 6.42981 6.42981 6 6.96 6H7.44C7.97019 6 8.4 6.42981 8.4 6.96C8.4 7.09255 8.29255 7.2 8.16 7.2H6.24C6.10745 7.2 6 7.09255 6 6.96Z" fill="#A41517"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div onClick={() => this.props.language('EN')} className="country england">
                                        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H23.2C24.3046 0 25.2 0.895431 25.2 2V16C25.2 17.1046 24.3046 18 23.2 18H2C0.895431 18 0 17.1046 0 16V2Z" fill="white"/>
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="18">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.89543 0 2 0H23.2C24.3046 0 25.2 0.895431 25.2 2V16C25.2 17.1046 24.3046 18 23.2 18H2C0.895431 18 0 17.1046 0 16V2Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H25.2V18H0V0Z" fill="#0A17A7"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0062 12.0001L-2.49628 17.735L-1.15422 19.7247L9.60001 12.4709V19.2001H15.6V12.471L26.3542 19.7248L27.6963 17.7351L19.1937 12.0001H25.2V6.00006H19.1935L27.6963 0.264832L26.3542 -1.72485L15.6 5.52893V-1.19995H9.60001V5.52899L-1.15422 -1.72479L-2.49628 0.264893L6.00645 6.00006H0V12.0001H6.0062Z" fill="white"/>
                                            <path d="M16.8012 5.69899L28.2 -1.79999" stroke="#DB1F35" stroke-width="0.666667" strokeLinecap="round"/>
                                            <path d="M18.0115 12.3278L28.23 19.2153" stroke="#DB1F35" stroke-width="0.666667" strokeLinecap="round"/>
                                            <path d="M7.20498 5.67933L-3.45374 -1.50397" stroke="#DB1F35" stroke-width="0.666667" strokeLinecap="round"/>
                                            <path d="M8.36104 12.2443L-3.45374 20.0793" stroke="#DB1F35" stroke-width="0.666667" strokeLinecap="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.8H10.8V18H14.4V10.8H25.2V7.2H14.4V0H10.8V7.2H0V10.8Z" fill="#E6273E"/>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                
            </div>
        )
    }
}

export default Navbar