import { useState, useEffect } from 'react'
import BookList from '../../components/bookList'
import { HTTP_GET } from '../../utils/http'
import { Navigate, useNavigate } from "react-router-dom"
import styles from './index.module.scss'


export default function Homepage() {
  const [lists, setLists] = useState([])
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    Promise.all([
      HTTP_GET('/subjects/love.json'),
      HTTP_GET('/subjects/war.json'),
      HTTP_GET('/subjects/adventure.json')
    ]).then(data => setLists(data))
  }, [])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/book/${inputValue}`)
  }

  return (
    <div className={styles.Homepage}>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          My Library
        </h1>
        {/* <Searchbar /> */} 
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input
            className={styles.inputText}
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            />
            <input className={styles.btn} type="submit" value="Search" />
        </form>
      </div>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  )
}
