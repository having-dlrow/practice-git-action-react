import AdminTable from '@/components/adminTable/adminTable'
import AdminSearch from '@/components/adminSearch/adminSearch'
import style from './styles/adminMemberPage.module.scss'
import { useState } from 'react'

export default function AdminMemberPage() {
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
      title: '신고누적',
      dataIndex: 'reportCount',
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
      rank: (
        <select>
          <option value="1">Lv.1</option>
          <option value="2">Lv.2</option>
          <option value="3">Lv.3</option>
        </select>
      ),
      registerDate: '2024.03.01',
      reportCount: '0회',
      management: <button>추방</button>,
    })
  }
  const [count, setCount] = useState(0)
  return (
    <div>
      <span>회원 리스트</span>
      <div className={style.container}>
        <AdminSearch type="member" />
      </div>
      <div className={style.textSection}>
        <span className={style.memberText}>
          선택회원 <span style={{ fontWeight: 'bold' }}>{count}</span>명
        </span>
      </div>
      <AdminTable pageSize={10} columns={columns} data={data} setCount={setCount} isSelect />
    </div>
  )
}
