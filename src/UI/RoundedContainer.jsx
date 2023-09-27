
const RoundedContainer = (props) => {
    const cssClass = " border border-gray  rounded-lg text-white " + props.className;
    return (
        <div className={cssClass} >
            {props.children}
        </div>
    )
}

export default RoundedContainer
