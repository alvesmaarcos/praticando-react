import Collaborator from "../Collaborator"

export const Team = (props) => {
    return (
        props.colaboradores.length > 0 ?
        <section className="team" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Collaborator
                                                        key={colaborador.nome}
                                                        imagem={colaborador.imagem}
                                                        nome={colaborador.nome}
                                                        cargo={colaborador.cargo}                                                        
                                                        />) }
            </div>
        </section> : ''
    )
}