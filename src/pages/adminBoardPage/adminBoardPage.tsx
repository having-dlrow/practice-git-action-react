import { useLocation } from 'react-router-dom'
import NoticeComponent from './_components/noticeComponent'
import BoardComponent from './_components/boardComponent'
export default function AdminBoardPage() {
  const location = useLocation()

  return (
    <>
      <div>{location.state && location.state.category !== null ? location.state.category : '공지사항'}</div>
      {location.state && location.state.category !== '공지사항' ? <BoardComponent /> : <NoticeComponent />}
    </>
  )
}
