import AdminSearch from '@/components/adminSearch/adminSearch'
import AdminTable from '@/components/adminTable/adminTable'
import style from '../styles/sendComponent.module.scss'
import { Dispatch, SetStateAction, useState } from 'react'

interface sendComponentProps {
  setIsModal: Dispatch<SetStateAction<boolean>>
}
export default function SendComponent({ setIsModal }: sendComponentProps) {
  const columns = [
    {
      title: '번호',
      dataIndex: 'number',
    },
    {
      title: '아이디',
      dataIndex: 'id',
    },
    {
      title: '회원명',
      dataIndex: 'name',
    },
    {
      title: '닉네임',
      dataIndex: 'nickname',
    },
    {
      title: '가입일',
      dataIndex: 'registerDate',
    },
    {
      title: '회원등급',
      dataIndex: 'rank',
    },
    {
      title: '관리',
      dataIndex: 'management',
    },
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      number: i,
      id: `user${i}`,
      name: `회원${i}`,
      nickname: `닉네임${i}`,
      rank: 'Lv.1',
      registerDate: '2023.03.01',
      management: <button>쪽지 보내기</button>,
    })
  }
  const [count, setCount] = useState(0)
  return (
    <>
      <div className={style.entireSection}>
        <span>전체 회원</span>
        <button className={style.sendButton} onClick={() => setIsModal(true)}>
          전체 회원에게 쪽지 보내기
        </button>
      </div>
      <div className={style.label}>회원 검색</div>
      <div className={style.container}>
        <AdminSearch />
        <div className={style.textSection}>
          <div className={style.buttonSection}>
            <span>
              선택회원 <span style={{ fontWeight: 'bold' }}>{count}</span>명
            </span>
            <button className={style.sendButton} onClick={() => setIsModal(true)}>
              쪽지 보내기
            </button>
          </div>
          <span>
            검색결과 / <span style={{ fontWeight: 'bold' }}>1</span> / 총 <span style={{ fontWeight: 'bold' }}>1</span>명 검색결과
          </span>
        </div>
        <AdminTable pageSize={10} columns={columns} data={data} setCount={setCount} isSelect />
      </div>
    </>
  )
}
