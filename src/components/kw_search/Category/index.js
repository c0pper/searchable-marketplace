import React from 'react'
import styles from './styles.module.css'


const Category = ({categories, filterCategory, setFilterCategory}) => {
    const onChange = (event) => {
        const inputValue = event.target.value;
        const isChecked = event.target.checked;
    
        if (isChecked) {
          const updatedState = [...filterCategory, inputValue];
          setFilterCategory(updatedState);
        } else {
          const updatedState = filterCategory.filter((val) => val !== inputValue);
          setFilterCategory(updatedState);
        }
    }

    //suggestion by chatgpt
    // const onChange = (event) => {
    //     setFilterGenre(event.target.checked);
    //   };

    return (
        <div>
            <h1 className={styles.heading}>Filter by Category</h1>
            <div className={styles.container}>
                <div className={styles.category_container}>
                    {categories.map((category) => (
                        <div className={styles.category} key={category}>
                            <input
                                type='checkbox'
                                value={category}
                                onChange={onChange}
                            />
                            <p className={styles.category_label}>{category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category