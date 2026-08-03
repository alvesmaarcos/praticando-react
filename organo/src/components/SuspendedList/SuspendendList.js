export const SuspendendList = (props) => {
    console.log(props.itens)


    return (
        <div className="suspendend-list">
            <label>{props.label}</label>
            <select>
                    {props.itens.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}