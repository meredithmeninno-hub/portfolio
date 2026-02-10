import styles from "./globalHomepage.module.css"
import { useNavigate } from 'react-router-dom';

export function Button({text, page}){
    const navigate = useNavigate();
    return(
        
        <div className = {styles.button}
        onClick={() => navigate(page, { preventScrollReset : false})}>
            {text}
        
        </div>
    )
}