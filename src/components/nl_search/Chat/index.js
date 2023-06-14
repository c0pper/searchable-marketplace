import React from 'react'
import styles from './styles.module.css'
import { ReactComponent as SvgImage } from './chatbot.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChatProductCard from '../ChatProductCard';


const Chat = ({answerObj}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productPromises = answerObj.answer.sources.map((source) =>
          axios.get(`${process.env.REACT_APP_API_URL}/${source.metadata.id}`)
        );
        const productResponses = await Promise.all(productPromises);
        const productsData = productResponses.map((response) => response.data);
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    if (answerObj) {
      fetchProducts();
    }
  }, [answerObj]);

  

  return (
    <div className={styles.message_container}>
      {/* <ChatProductCard /> */}

      {answerObj && answerObj.answer ? 
      <>
        <SvgImage className={styles.svg_image} />
        <div className={styles.answer_container}>
          <p>{answerObj.answer.generative_reply}</p>

          {products.length > 0 && (
            <>
              {products.map((product) => {

                // get each result's score
                const sources = answerObj.answer.sources
                const score = sources.find((source) => source.metadata.id === product._id)?.score

                const max_score = sources.reduce((prev, current) => (prev.score > current.score) ? prev.score : current.score)
                const inverse_normalized_score = (max_score - score) / max_score * 100

                return (
                  <ChatProductCard product={product} score={inverse_normalized_score} />
                )
              })}
            </>
          )}

        </div>
      </>
      :
      undefined
      }
    </div>
  )
}

export default Chat