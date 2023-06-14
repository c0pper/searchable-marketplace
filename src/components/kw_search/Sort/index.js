import styles from './styles.module.css'
import React from 'react'

const Sort = ({sort, setSort}) => {
    const onSelectChange = ({currentTarget: input}) => {
        setSort({sort: input.value, order: sort.order})
    }

    const onArrowChange = () => {
        if (sort.order === 'asc') {
            setSort({sort: sort.sort, order: 'desc'})
        } else {
            setSort({sort: sort.sort, order: 'asc'})
        }
    }

    return (
    <div className={styles.wrapper}>
        <p className={styles.heading}>Sort by:</p>
        <div className={styles.container}>
            <select
                className={styles.select}
                defaultValue={sort.sort}
                onChange={onSelectChange}
            >
                <option value={'dateAdded'}>Year</option>
                <option value={'rating'}>Rating</option>
            </select>
            <button
                className={styles.arrow_btn}
                onClick={onArrowChange}
            >
                <p className={styles.up_arrow}>&uarr;</p>
                <p className={styles.down_arrow}>&darr;</p>
            </button>
        </div>
    </div>
  )}


export default Sort