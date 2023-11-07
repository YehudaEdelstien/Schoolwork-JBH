import { useLocation, Link } from "react-router-dom"


export default function FilePath() {
  const location = useLocation().pathname
  const pathArr = location.split('/');
  return (
    <div>
      {pathArr.length >= 1 && pathArr.map((el, index, arr) => {
        if (el === '' && index === 0) {
          return <Link to={'./'} key='root'>root</Link>
        }

        return <PathLink el={el} index={index} arr={arr} key={index}/>
      })}
    </div>
  )
}

function PathLink({el, index, arr}) {
  const path = useHrefHandler(index, arr)
  return <> / <Link to={path}>{el}</Link> </>
}

function useHrefHandler(index, arr) {
  let location = '.';
  for (let i = 1; i < index + 1; i++) {
    location += '/' + arr[i];
  }
  return location;
}