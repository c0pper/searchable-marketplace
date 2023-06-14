import React from 'react'
import styles from './styles.module.css'

const QuestionBar = ({setNlQuestion, askLLM}) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            askLLM(event.target.value)
            event.target.value = ''
        }
      };
    
    return (
    <div>
        <input 
            className={styles.search}
            type='text'
            placeholder='I am looking for a cloud backup service...'
            onChange={({currentTarget: input}) => setNlQuestion(input.value)}
            onKeyDown={handleKeyDown} // Call onKeyDown on key press
        />
    </div>
  )
}

export default QuestionBar