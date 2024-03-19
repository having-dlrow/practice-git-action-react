import { Outlet, useLocation } from 'react-router-dom'
import style from './styles/adminPage.module.scss'
import Sidebar from '../../components/sidebar/sidebar'
import { useEffect, useState } from 'react'
export default function AdminPage() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const titles = ['회원 관리', '게시글 관리', '쪽지 관리', '신고 관리', '채팅 관리']
  const contents = [['회원 정보 관리'], ['공지사항', '커뮤니티', '검증방', '사기제보'], ['쪽지 보내기', '보낸 쪽지함'], ['신고 회원 정보', '신고 게시글', '신고 댓글'], ['채팅 관리']]
  const location = useLocation()
  useEffect(() => {
    const paths = ['member', 'board', 'mail', 'chat', 'report']
    const parts = location.pathname.split('/').pop()
    if (parts) {
      const index = paths.indexOf(parts)
      setSelectedIdx(index)
    }
  }, [location.pathname])
  return (
    <>
      <Sidebar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} title={titles[selectedIdx]} contents={contents[selectedIdx]} />
      <div className={style.container}>
        <Outlet />
      </div>
    </>
  )
}
