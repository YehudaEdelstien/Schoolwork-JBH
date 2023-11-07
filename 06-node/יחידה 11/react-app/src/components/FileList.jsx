import { Link } from 'react-router-dom';

export default function FileList({ list, path }) {
    return (
        <ul>
            {list.map((el, index) => {
                let hrefTarget = path === '/' ? '' : path;
                hrefTarget += '/' + el
                return <li key={index}><Link to={hrefTarget}>{el}</Link></li>
            })}
        </ul>
    )
}
