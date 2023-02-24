import styles from './ThankYouMessage.module.css'

export default function ThankYouMessage1({message, author}){
    return(
        <div className = {`max-w-[250px] border border-gray-300 p-3 rounded-lg h-fit`}>
            <p>{message}</p>
            <br/>
            <h2> - {author}</h2>
        </div>
    )
}