import { useMemo, useState } from 'react'
import style from '../styles/writeNotice.module.scss'
import '../styles/quill.scss'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
export default function WriteNotice() {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [['bold', 'underline', { color: [] }, { list: 'ordered' }, { list: 'bullet' }, { align: [] }, 'link', 'image']],
        //TODO: 추후 이미지 핸들러 추가
      },
    }
  }, [])
  const formats = ['bold', 'underline', 'list', 'bullet', 'indent', 'link', 'image', 'align', 'color']
  const [content, setContent] = useState('')
  return (
    <div className={style.container}>
      <span>공지사항 작성</span>
      <div className={style.titleSection}>
        <span>제목</span>
        <input />
      </div>
      <div className={style.textSection}>
        <span className={style.contentText}>내용</span>
        <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setContent} />
      </div>
      <div className={style.submitButton}>
        <div>작성</div>
      </div>
    </div>
  )
}
