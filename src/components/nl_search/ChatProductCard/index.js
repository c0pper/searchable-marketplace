import React from 'react'
import styles from './styles.module.css'

const ChatProductCard = ({product, score}) => {
  return (
    <div className='bg-slate-200 rounded mt-4 mr-4 min-w-[500px]'>
        <div className={styles.score_bar}>
            <div className={styles.bar_fill} style={{ width: `${score}%` /* '90%' */ }}></div>
        </div>
        <div className={styles.product_card_container}>
            <div className='flex'>
                <img className={styles.product_img} src={product.img} /* 'https://static.wixstatic.com/media/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg/v1/fill/w_772,h_397,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg' */ alt='logo' />
                <div className={styles.info_container}>
                    <p className={styles.product_title}>{product.name}{/* Name */}</p>
                    <p className={styles.price}>{product.price}/m{/* 34€/m */}</p>
                </div>
            </div>
            <p className={styles.goto_btn}>Go to product</p>
        </div>
    </div>
  )
}

export default ChatProductCard