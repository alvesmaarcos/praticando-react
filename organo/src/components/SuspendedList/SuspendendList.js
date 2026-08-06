export const SuspendendList = (props) => {
    console.log(props.itens)

    return (
        <div className="suspendend-list">
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.val}>
                    <option value="" disabled hidden>Selecione</option>
                    {props.itens.map(item => {
                        return <option key={item} value={item}>{item}</option>
                    })}
            </select>
        </div>
    )
}