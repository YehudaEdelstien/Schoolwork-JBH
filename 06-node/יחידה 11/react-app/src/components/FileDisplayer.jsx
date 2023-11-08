export default function FileDisplayer({ title, text }) {

    return (
        <div className="span2">
            <div>
                Selected file: {title} 
                {title && <button className="button">✏️</button>}
            </div>
            <p>Text:</p>
            <pre>{text}</pre>
        </div>
    )
}