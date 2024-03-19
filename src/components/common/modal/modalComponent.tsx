import React, { Dispatch, SetStateAction } from 'react'
import { Modal } from 'antd'

interface ModalComponentProps {
  title: React.ReactNode
  content: React.ReactNode
  button: React.ReactNode[]
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function ModalComponent({ title, content, button, isOpen, setIsOpen }: ModalComponentProps) {
  const handleOk = () => {
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Modal open={isOpen} title={title} onOk={handleOk} onCancel={handleCancel} footer={button} centered>
        {content}
      </Modal>
    </>
  )
}
