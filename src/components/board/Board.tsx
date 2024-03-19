import Pagination from '../common/pagination/Pagination'
import Table from './Table'
import style from './board.module.scss'

type Props = {
  title: string
  boardType: 'notice' | 'community'
}

export default function Board({ title, boardType }: Props) {
  return (
    <div className={style.container}>
      <h2>{title}</h2>
      <div className={style.TableDiv}>
        <Table boardType={boardType} />
      </div>
      <span className={style.paginationSpan}>
        <Pagination maxPageCount={10} />
      </span>
      {boardType === 'community' && <button className={style.writeButton}>글쓰기</button>}
    </div>
  )
}
