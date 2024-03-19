import style from './maxWidthBox.module.scss'
import { ReactNode } from 'react'

export default function MaxWidthBox({ children }: { children: ReactNode }) {
  return <div className={style.container}>{children}</div>
}
