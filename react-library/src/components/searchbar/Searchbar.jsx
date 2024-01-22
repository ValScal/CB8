import { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import styles from './index.module.scss' 

export default function Searchbar() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/book/${inputValue}`)
    }

        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input
            className={styles.inputText}
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            />
            <input className={styles.btn} type="submit" value="Search" />
        </form>
}

// Note:
// tentativo di creare una searchbar come componente a sè stante, da inserire in homepage. 
// non riesco a farlo renderizzare, quindi metto tutto all'interno di Homepage.
// vorrei capire cosa sbaglio
