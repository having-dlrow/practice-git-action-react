import style from './adminSearch.module.scss'

interface AdminSearchProps {
  type?: string
}
export default function AdminSearch({ type }: AdminSearchProps) {
  return (
    <div className={style.content}>
      <div className={style.inputContainer}>
        <div className={style.inputContent}>
          <span>{type === 'member' ? '가입일' : '작성일'}</span>
          <div className={style.shortInputContainer}>
            <input className={style.shortInput}></input>
            <span>~</span>
            <input className={style.shortInput}></input>
          </div>
        </div>
        <div className={style.inputContent}>
          <span>검색어</span>
          <input className={style.input}></input>
        </div>
      </div>
      <div className={style.searchButton}>검색</div>
    </div>
  )
}
