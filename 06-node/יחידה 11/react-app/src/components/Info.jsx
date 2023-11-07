export default function Info({info}) {
    console.log(info)
    return (
        <div>
            <h3>Info</h3>
            {info.size && <p>Size: {info.size} bytes</p>}
            {info.created && <p>Date Created: {new Date(info.created).toLocaleString()}</p>}
            {info.modified && <p>Last Modified: {new Date(info.modified).toLocaleString()}</p>}
        </div>
    )
}