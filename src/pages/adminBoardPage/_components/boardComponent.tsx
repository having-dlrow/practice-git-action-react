import AdminSearch from '@/components/adminSearch/adminSearch'
import AdminTable from '@/components/adminTable/adminTable'
import style from '../styles/boardComponent.module.scss'

export default function BoardComponent() {
  const columns = [
    {
      title: '번호',
      dataIndex: 'number',
    },
    {
      title: '제목',
      dataIndex: 'title',
      width: 1000,
    },
    {
      title: '작성자 닉네임',
      dataIndex: 'nickname',
    },
    {
      title: '작성자 아이디',
      dataIndex: 'id',
    },
    {
      title: '작성일',
      dataIndex: 'date',
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
      title: '어쩌구 저쩌구 가나다라마바사',
      nickname: '땡땡이',
      id: `user${i}`,
      date: '2024.02.03',
      management: <button>삭제</button>,
    })
  }
  return (
    <div>
      <div className={style.container}>
        <AdminSearch />
      </div>
      <div className={style.resultText}>
        검색결과 / 총 <span>10</span>건 검색결과
      </div>
      <AdminTable columns={columns} data={data} pageSize={10} isSelect />
    </div>
  )
}
