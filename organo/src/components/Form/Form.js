import { useState } from "react"
import Button from "../Button"
import SuspendendList from "../SuspendedList"
import TextField from "../TextField"

export const Form = (props) => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoEnviar = (evento) => {
        evento.preventDefault()
        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="form">
            <form onSubmit={aoEnviar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    val={nome}
                    aoAlterado={val => setNome(val)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    val={cargo}
                    aoAlterado={val => setCargo(val)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    val={imagem}
                    aoAlterado={val => setImagem(val)}
                /> 
                <SuspendendList 
                    required={true}
                    label='Time' 
                    itens={times}
                    val={time}
                    aoAlterado={val => setTime(val)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}