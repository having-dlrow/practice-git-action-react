import { Select } from 'antd'
import style from '../styles/search.module.scss'
import SearchIcon from '@/assets/images/search.svg?react'

export default function Search() {
  return (
    <>
      <div className={style.container}>
        <Select
          className={style.select}
          defaultValue="아이디"
          options={[
            { value: 'id', label: '아이디' }, // TODO: 추가 options 확인 필요
          ]}
        />
        <div className={style.inputContainer}>
          <input className={style.input} />
          <div className={style.searchButton}>
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className={style.deleteButton}>삭제</div>
    </>
  )
}
