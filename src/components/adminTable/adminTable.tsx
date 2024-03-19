import React, { Dispatch, SetStateAction, useState } from 'react'
import { Table } from 'antd'
import style from './adminTable.module.scss'

interface AdminTableProps {
  columns: {
    title: string
    dataIndex: string
  }[]
  data: {
    key: number
  }[]
  setCount?: Dispatch<SetStateAction<number>>
  pageSize: number
  isSelect?: boolean
}

export default function AdminTable({ columns, data, setCount, pageSize, isSelect }: AdminTableProps) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
    setCount(newSelectedRowKeys.length)
  }

  const rowSelection = isSelect
    ? {
        selectedRowKeys,
        onChange: onSelectChange,
      }
    : undefined

  return (
    <div>
      <Table
        className={style.table}
        rowSelection={rowSelection}
        rowClassName={(record) => (selectedRowKeys.includes(record.key) ? style.selectedRow : '')}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: pageSize, position: ['bottomCenter'] }}
      />
    </div>
  )
}
