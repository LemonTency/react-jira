import React from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'
import qs from 'qs'
import { useState, useEffect } from "react"
import { cleanObject, useMount, useDebounce } from 'utils'
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
  //负责人下拉选项
  const [users, setUsers] = useState([])
  //表单数据
  const [param, setParam] = useState({
    name: '',
    id: ''
  })
  const useDebounceValue = useDebounce(param, 1000)

  //结果列表
  const [list, setList] = useState([])
  useEffect(() => {
    console.log('apiUrl', apiUrl)
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  useMount(() => {
    console.log('apiUrl', apiUrl)
    fetch(`${apiUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  })
  useEffect(() => {
    console.log('useDebounceValue', useDebounceValue)
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(useDebounceValue))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [useDebounceValue])
  return <div>
    <SearchPanel users={users} param={param} setParam={setParam} />
    <List users={users} list={list} />
  </div>
}