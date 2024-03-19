import style from './table.module.scss'
import cs from 'classnames/bind'
const cx = cs.bind(style)
import { communityTableData, noticeTableData } from './mockData'

type Props = {
  boardType: 'notice' | 'community'
}

export default function Table({ boardType }: Props) {
  const tableHeader = ['번호', '제목', '작성자', '날짜', '조회']
  const TableData = boardType === 'notice' ? noticeTableData : communityTableData
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeader.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody className={style.tbody}>
        {TableData.map(({ id, title, author, date, views }, index) => (
          <tr key={index}>
            <td>
              <span className={cx(id === '알림' && 'notice')}>{id}</span>
            </td>
            <td className={style.titleTd}>{title}</td>
            <td className={style.authorTd}>{author}</td>
            <td>{date}</td>
            <td>{views}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
