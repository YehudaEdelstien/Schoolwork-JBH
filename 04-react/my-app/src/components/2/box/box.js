function Box(props) {
    return <div style={{backgroundColor: props.color, height: "100px", width: "100px"}}></div>
}

export default function Boxes() {
    return <div style={{display: "flex"}}>
    <Box color="darkorchid"/>
    <Box color="olive"/>
    <Box color="palegreen"/>
    <Box color="orangered"/>
    <Box color="snow"/>
    <Box color="seagreen"/>
    <Box color="navy"/>
    <Box color="lime"/>
    <Box color="indigo"/>
    </div>
}