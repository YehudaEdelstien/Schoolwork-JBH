import { useLocation, Link } from "react-router-dom"

export default function About() {
  const location = useLocation().pathname
  const pathArr = location.split('/');
  console.log(pathArr)
  return (
    <div>
      {pathArr.length >= 1 && pathArr.map((el, index, arr) => {
        if (el === '' && index === 0) {
          return <Link to={'./'}>root</Link>
        }
        
        return <PathLink el={el} index={index} arr={arr}/>
      })}
    </div>
  )
}

function PathLink({el, index, arr}) {
  const path = useHrefHandler(index, arr)
  console.log(path)
  return <> / <Link to={path}>{el}</Link> </>
}

function useHrefHandler(index, arr) {
  let location = '.';
  for (let i = 1; i < index + 1; i++) {
    location += '/' + arr[i];
  }
  console.log(location);
  return location;
}