import AdminTable from '@/components/adminTable/adminTable'
import { useState } from 'react'
import Search from './search'
export default function SentMailBox() {
  const columns = [
    {
      title: '번호',
      dataIndex: 'number',
      width: 30,
      ellipsis: true,
    },
    {
      title: '받는사람',
      dataIndex: 'name',
      width: 50,
      ellipsis: true,
    },
    {
      title: '내용',
      dataIndex: 'content',
      ellipsis: true,
      width: 500,
    },
    {
      title: '보낸날짜',
      dataIndex: 'date',
      width: 100,
      ellipsis: true,
    },
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      number: i,
      name: `user${i}`,
      content:
        '한국예총부산광역시연합회(이하 부산예총) 제27대 회장에 오수연 후보가 연임됐다. 임기는 다음 달 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 가나다라마바사아자차카타파하 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 가나다라마바사아자차카타파하',
      date: '2023.03.01. [17:43:02]',
    })
  }
  const [count, setCount] = useState(0)
  return (
    <>
      <Search />
      <AdminTable pageSize={20} columns={columns} data={data} setCount={setCount} isSelect />
    </>
  )
}
