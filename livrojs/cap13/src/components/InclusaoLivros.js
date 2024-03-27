import {useForm} from "react-hook-form";

const InclusãoLivros = () => {
    //register serve paara definir os nomes dos campos do form (e validações)
    //handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
    const { register, handleSubmit} = useForm()


//método chamado ao enviar o form (onSubmit)
    const salvar = (campos) =>{
        //Json.stringfy() converte um objeto JavaScript para uma String JSON
        alert(JSON.stringify(campos))
    }

    return (
        <div className="container">
            <h4 className="fst-italic mt-3">Inclusão</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" className="form-control" id="titulo" required autoFocus {...register("titulo")}></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="autor">Autor:</label>
                    <input type="text" className="form-control" id="autor" {...register("autor")} required></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="foto">URL da Foto:</label>
                    <input type="url" className="form-control" id="foto" {...register("foto")} required></input>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label htmlFor="ano">Ano de Publicação:</label>
                            <input type="number" className="form-control" id="ano" {...register("ano")} required></input>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label htmlFor="preco">Preço R$:</label>
                            <input type="number" className="form-control" id="preco" step="0.01" {...register("preco")} required ></input>
                        </div>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar"></input>
                <input type="reset" className="btn btn-danger mt-3 ms-3" value="Limpar"></input>
            </form>
            <div className="alert"></div>
        </div>
    )
}

export default InclusãoLivros;