import React, { useState } from "react";
import "../style/variables.css";
import styles from "../style/ServicesPromotion.module.css"


function ServicesPromotion() {
 

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h3>Test</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos sequi praesentium, quam dolor accusamus quia obcaecati voluptatum, facilis dolore ipsa tenetur culpa quos! Excepturi, non.</p>
        </div>
        <div className={styles.all_bloc}>
            <div className={styles.bloc}>
                <i class="fa-solid fa-star"></i>
                <span>Lorem</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur qui quaerat quibusdam veritatis in molestiae saepe sed suscipit, reiciendis consequatur neque pariatur excepturi a sint!</p>
            </div>
            <div className={styles.bloc}>
                <i class="fa-solid fa-star"></i>
                <span>Lorem</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur qui quaerat quibusdam veritatis in molestiae saepe sed suscipit, reiciendis consequatur neque pariatur excepturi a sint!</p>
            </div>
            <div className={styles.bloc}>
                <i class="fa-solid fa-star"></i>
                <span>Lorem</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur qui quaerat quibusdam veritatis in molestiae saepe sed suscipit, reiciendis consequatur neque pariatur excepturi a sint!</p>
            </div>
            <div className={styles.bloc}>
                <i class="fa-solid fa-star"></i>
                <span>Lorem</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur qui quaerat quibusdam veritatis in molestiae saepe sed suscipit, reiciendis consequatur neque pariatur excepturi a sint!</p>
            </div>

        </div>
    </div>
  )
}

export default ServicesPromotion