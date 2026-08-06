export const TextField = (props) => {

    const aoAlterar = (event) => {
        props.aoAlterado(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input onChange={aoAlterar} required={props.obrigatorio} placeholder={props.placeholder} value={props.val}></input>
        </div>
    )
}