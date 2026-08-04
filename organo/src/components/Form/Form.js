import Button from "../Button"
import SuspendendList from "../SuspendedList"
import TextField from "../TextField"

export const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const aoEnviar = (evento) => {
        evento.preventDefault()
        console.log('Form has been submitted.')
    }

    return (
        <section className="form">
            <form onSubmit={aoEnviar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <TextField obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" /> 
                <SuspendendList label='Time' itens={times}></SuspendendList>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}