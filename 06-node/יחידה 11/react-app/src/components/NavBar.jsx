import { useLocation, Link } from "react-router-dom"


export default function About() {
    const location = useLocation().pathname
    const pathArr = location.split('/');
    console.log(pathArr)
    return (
      <div>
        {pathArr.length >= 1 && pathArr.map((el, index, arr) => {
          if (el === '') return <>/</>
          console.log(arr.length, index)
          return(
          <>
            <Link to={el}>{el}</Link>
            {index < arr.length -1 && <>/</>}
          </>
          )
        })}
      </div>
    )
 }