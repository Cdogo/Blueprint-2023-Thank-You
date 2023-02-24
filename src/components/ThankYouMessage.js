import styles from './ThankYouMessage.module.css'

export default function ThankYouMessage({message, author, delay, xPos}){
    if (delay && xPos){
        return(
            <div style = {{left:`${xPos}%`, animationDelay:`${delay + 10.5}s`}} className = {`${styles.message} bg-white max-w-[250px] border border-gray-300 p-3 rounded-lg h-fit`}>
                <p>{message}</p>
                <br/>
                <h2> - {author}</h2>
            </div>
        )
    } else {
        return <></>
    }
}