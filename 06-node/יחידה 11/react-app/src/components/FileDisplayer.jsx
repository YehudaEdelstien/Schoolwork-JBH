export default function FileDisplayer({title, text}) {

    return (
        <div className="span2">
            <p>Selected file: {title}</p>
            <p>Text:</p>
            <pre>{text}</pre>
            {/* <textarea type="week"></textarea> */}
        </div>
    )
}