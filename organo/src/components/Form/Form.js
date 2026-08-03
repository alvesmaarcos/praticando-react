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

    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField label="Nome" placeholder="Digite o seu nome" />
                <TextField label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" /> 
                <SuspendendList label='Time' itens={times}></SuspendendList>
            </form>
        </section>
    )
}