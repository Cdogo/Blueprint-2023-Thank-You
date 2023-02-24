import styles from './ThankYouMessage.module.css'

export default function ThankYouMessage1({message, author}){
    return(
        <div className = {`flex flex-col justify-between max-w-[250px] border border-gray-300 p-3 rounded-lg h-full`}>
            <p className = 'overflow-auto h-full'>{message}</p>
            
            <h2> - {author}</h2>
        </div>
    )
}