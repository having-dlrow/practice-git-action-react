import style from './pagination.module.scss'
import cs from 'classnames/bind'
const cx = cs.bind(style)
import LeftArrow from '@/assets/images/leftArrow.svg?react'
import LeftArrow2 from '@/assets/images/leftArrow2.svg?react'
import RightArrow from '@/assets/images/rightArrow.svg?react'
import RightArrow2 from '@/assets/images/rightArrow2.svg?react'
import { useState } from 'react'

type Props = {
  maxPageCount: number
}

export default function Pagination({ maxPageCount = 10 }: Props) {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrev = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }
  const handleMorePrev = () => {
    const _currentPage = currentPage - 10
    if (_currentPage < 1) {
      return setCurrentPage(1)
    }
    setCurrentPage(_currentPage)
  }
  const handleNext = () => {
    if (currentPage === maxPageCount) return
    setCurrentPage(currentPage + 1)
  }
  const handleMoreNext = () => {
    const _currentPage = currentPage + 10
    if (_currentPage > maxPageCount) {
      return setCurrentPage(maxPageCount)
    }
    setCurrentPage(_currentPage)
  }

  const pageArray = Array.from({ length: maxPageCount }, (_, i) => i + 1)
  return (
    <div className={style.container}>
      <div className={style.controller}>
        <span className={cx('iconSpan', currentPage === 1 && 'inActive')} onClick={handleMorePrev}>
          <LeftArrow2 />
        </span>
        <span className={cx('iconSpan', currentPage === 1 && 'inActive')} onClick={handlePrev}>
          <LeftArrow />
        </span>
      </div>
      <ul className={style.ul}>
        {pageArray.map((page, index) => (
          <li key={index} className={cx(currentPage === page && 'active')} onClick={() => setCurrentPage(page)}>
            {page}
          </li>
        ))}
      </ul>
      <div className={style.controller}>
        <span className={cx('iconSpan', currentPage === maxPageCount && 'inActive')} onClick={handleNext}>
          <RightArrow />
        </span>
        <span className={cx('iconSpan', currentPage === maxPageCount && 'inActive')} onClick={handleMoreNext}>
          <RightArrow2 />
        </span>
      </div>
    </div>
  )
}
