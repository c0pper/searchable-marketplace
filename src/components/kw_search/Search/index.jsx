import React from 'react'
import styles from './styles.module.css'

const Search = ({setSearch}) => {
  return (
    <div>
        <p className={styles.heading}>Search by keyword:</p>
        <input 
        className={styles.search}
        type='text'
        placeholder='search'
        onChange={({currentTarget: input}) => setSearch(input.value)}
      />
    </div>

  )
}

export default Search