import { useState, useEffect } from 'react'
import { List } from 'antd'

export default function Task({ item }){
    const [itemStyle, setItemStyle] = useState({})
    useEffect(()=>{}, [])
    return <List.Item style={itemStyle}>{item.task}</List.Item>
}