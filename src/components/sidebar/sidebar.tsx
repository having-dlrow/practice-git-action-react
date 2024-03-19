import { Dispatch, SetStateAction, useState } from 'react'
import styles from './sidebar.module.scss'
import Member from '@/assets/images/member.svg?react'
import Board from '@/assets/images/board.svg?react'
import Mail from '@/assets/images/mail.svg?react'
import Chat from '@/assets/images/chat.svg?react'
import Siren from '@/assets/images/siren.svg?react'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
const cx = classNames.bind(styles)

interface SideBarProps {
  selectedIdx: number
  setSelectedIdx: Dispatch<SetStateAction<number>>
  title: string
  contents: string[]
}
export default function Sidebar({ selectedIdx, setSelectedIdx, title, contents }: SideBarProps) {
  const [categoryIdx, setCategoryIdx] = useState(0)
  const navigate = useNavigate()
  const category = ['member', 'board', 'mail', 'chat', 'report']
  const icons = [
    <Member fill={selectedIdx === 0 ? '#8894ff' : '#959595'} />,
    <Board fill={selectedIdx === 1 ? '#8894ff' : '#959595'} />,
    <Mail fill={selectedIdx === 2 ? '#8894ff' : '#959595'} />,
    <Chat fill={selectedIdx === 3 ? '#8894ff' : '#959595'} />,
    <Siren stroke={selectedIdx === 4 ? '#8894ff' : '#959595'} />,
  ]

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        {icons.map((item, idx) => {
          return (
            <div
              onClick={() => {
                setSelectedIdx(idx)
                setCategoryIdx(0)
                navigate(`/admin/${category[idx]}`)
              }}
              key={idx}
              className={cx('iconBox', selectedIdx === idx && 'selectedBox')}
            >
              {item}
            </div>
          )
        })}
      </div>
      <div className={styles.content}>
        <span>{title}</span>
        {contents &&
          contents.map((item, idx) => {
            return (
              <span
                onClick={() => {
                  setCategoryIdx(idx)
                  navigate(`/admin/${category[selectedIdx]}`, { state: { category: contents[idx] } })
                }}
                className={cx('contentText', categoryIdx === idx && 'selectedText')}
                key={idx}
              >
                {item}
              </span>
            )
          })}
      </div>
    </div>
  )
}
