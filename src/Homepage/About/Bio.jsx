import mePic from "../images/mePic.png"
import phone from "../images/phone.png"
import email from "../images/email.png"
import styles from './Bio.module.css'

export function Bio() {
    return(
        <div className={styles.bioContainer}>
            <img 
                src={mePic} 
                className={styles.profileImage}
                alt="Profile"
            />
         
            <div className={styles.contentWrapper}>
                <div className={styles.contactRow}>
                    <img 
                        src={email}
                        alt="email icon"
                        className={styles.contactIcon}
                    />
                    <p className={styles.contactText}>
                        meredithmeninno@gmail.com
                    </p>
                </div>

                <div className={styles.contactRow}>
                    <img
                        src={phone}
                        alt="phone icon"
                        className={styles.contactIcon}
                    />
                    <p className={styles.contactText}>
                        (949)–391–8590
                    </p>
                </div>

                <p className={styles.bioText}>
                    Hi, I'm Meredith! I'm a multidisciplinary designer practicing graphic design, UI/UX, web development, and 3D modeling. I'm driven by an innate desire to create, and continue to push beyond my current skill set to allow me to deliver my best work. I view both design and programming as creative mediums, and I find that the balance between visual expression and analytical problem-solving strengthens my abilities in both disciplines.
                </p>  
            </div>    
        </div>
    )
}