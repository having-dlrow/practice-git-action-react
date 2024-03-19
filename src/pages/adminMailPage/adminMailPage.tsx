import { useLocation } from 'react-router-dom'
import style from './styles/adminMailPage.module.scss'
import { useState } from 'react'
import ModalComponent from '@/components/common/modal/modalComponent'
import SendComponent from './_components/sendComponent'
import SentMailBox from './_components/sentMailBox'

export default function AdminMailPage() {
  const location = useLocation()
  const [isModal, setIsModal] = useState(false)
  const ModalContent = () => {
    return (
      <div>
        <div className={style.inputContainer}>
          받는 회원
          <input />
        </div>
        <div className={style.inputContainer}>
          쪽지 내용
          <textarea className={style.longInput} placeholder="쪽지 내용 작성" />
        </div>
      </div>
    )
  }
  const ModalButton = () => {
    return (
      <div className={style.modalButton}>
        <div className={style.cancleButton}>취소</div>
        <div>보내기</div>
      </div>
    )
  }
  return (
    <>
      {isModal && <ModalComponent title={<span className={style.modalTitle}>쪽지 보내기</span>} content={<ModalContent />} button={[<ModalButton />]} isOpen={isModal} setIsOpen={setIsModal} />}
      <div>{location.state && location.state.category !== null ? location.state.category : '쪽지 보내기'}</div>
      {location.state && location.state.category === '보낸 쪽지함' ? <SentMailBox /> : <SendComponent setIsModal={setIsModal} />}
    </>
  )
}
