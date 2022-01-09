import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" alt="lay" layout='fill' objectFit='cover' />

            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                       FIND OUR RESTAURANTS
                    </h1>
                    <p className={styles.text}>
                        2800 E. Main St.
                       <br/> Winnipeg, r3w3r4, Canada
                        <br/>(204) 555-5555
                    </p>
                    <p className={styles.text}>
                        2800 E. Main St.
                       <br/> Winnipeg, r3w3r4, Canada
                        <br/>(204) 555-5555
                    </p>
                    <p className={styles.text}>
                        2800 E. Main St.
                       <br/> Winnipeg, r3w3r4, Canada
                        <br/>(204) 555-5555
                    </p>
                    <p className={styles.text}>
                        2800 E. Main St.
                       <br/> Winnipeg, r3w3r4, Canada
                        <br/>(204) 555-5555
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        WORKING HOURS
                    </h1>
                    <p className={styles.text}>
                       SAMNDAY UNTIL FRIDAY
                       <br/>9:00 - 22:00
                       </p>
                       <p className={styles.text}>
                       SATURDAY - SUNDAY
                       <br/>12:00 - 24:00
                       </p>
                </div>


            </div>
            
        </div>
    )
}

export default Footer
