import { useState } from 'react'
import MarketTrends from './marketTrends/MarketTrends'
import style from './header.module.scss'
import { Link } from 'react-router-dom'
import LiveChat from './liveChat/LiveChat'
export default function Header() {
  const [isLogin] = useState(false)
  const [isChatHide, setIsChatHide] = useState(true)

  const handleChatHide = () => {
    setIsChatHide(!isChatHide)
  }

  return (
    <header className={style.header}>
      <MarketTrends />
      <div className={style.navBar}>
        <div className={style.navContent}>
          <div className={style.logoSection}>
            <h1>
              <Link to="/">LOGO</Link>
            </h1>
            <nav>
              <ul className={style.menuItems}>
                <li>
                  <Link to="/notices">공지사항</Link>
                </li>
                <li>
                  <Link to="/board">커뮤니티</Link>
                </li>
                <li>
                  <Link to="/inspect">검증방</Link>
                </li>
                <li>
                  <Link to="/report">사기제보</Link>
                </li>
              </ul>
            </nav>
          </div>
          {!isLogin ? (
            <nav>
              <ul className={style.authLinks}>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/register">회원가입</Link>
                </li>
              </ul>
            </nav>
          ) : (
            <nav>
              <ul className={style.userInfo}>
                <li>{'유저 닉네임'}</li>
                <li>로그아웃</li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className={style.contentSection}>
        {!isChatHide ? <LiveChat handleChatHide={handleChatHide} /> : <img src="src/assets/images/chatToggle.svg" alt="" className={style.chatToggle} onClick={handleChatHide} />}
      </div>
    </header>
  )
}
