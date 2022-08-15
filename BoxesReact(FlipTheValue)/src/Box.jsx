
export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222" : "whitesmoke",
        border: props.on ? "2px solid #222" : "1px solid #222",
        borderRadius: props.on? "50%":"5px"
    }

    return(
        <div
            style={styles} 
            className="box"
            onClick={()=> props.toggle(props.id)}>
        </div>
    )
}

