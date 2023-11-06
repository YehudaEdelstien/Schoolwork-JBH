import { Link } from 'react-router-dom';

export default function FileList({list}) {
    return (
        <ul>
            {list.map((el, index) => {return <li key={index}>{el}</li>})}
        </ul>
    )
}
