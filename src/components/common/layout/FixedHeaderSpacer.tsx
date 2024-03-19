import style from './fixedHeaderSpacer.module.scss'
export default function FixedHeaderSpacer({ children }: { children: React.ReactNode }) {
  return <div className={style.container}>{children}</div>
}
