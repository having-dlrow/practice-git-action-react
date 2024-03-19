import AdminTable from '@/components/adminTable/adminTable'
import WriteNotice from './writeNotice'

export default function NoticeComponent() {
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
      title: '작성자',
      dataIndex: 'name',
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
      title: '공지합니다.',
      name: '관리자',
      date: '2024.02.03',
      management: (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <button>수정</button>
          <button>삭제</button>
        </div>
      ),
    })
  }
  return (
    <>
      <WriteNotice />
      <div style={{ fontSize: '14px', margin: '10px 0' }}>
        총 <span style={{ fontWeight: 'bold' }}>{data.length}</span>건의 공지사항
      </div>
      <AdminTable columns={columns} data={data} pageSize={10} />
    </>
  )
}
