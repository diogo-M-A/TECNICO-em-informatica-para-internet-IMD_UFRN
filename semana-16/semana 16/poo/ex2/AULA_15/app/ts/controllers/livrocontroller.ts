import { Livro } from "../models/livro";
import { Livros } from "../models/livros";
import { LivrosView } from "../views/livrosview";

export class LivroController{

    private _inputTitulo: HTMLInputElement;
    private _inputAutor: HTMLInputElement;
    private _inputEditora: HTMLInputElement;
    private _inputAno: HTMLInputElement;
    private _inputAvaliacao: HTMLInputElement;
    
    private _livros: Livros;

    private _livrosView: LivrosView;


    constructor(){
        this._inputTitulo = <HTMLInputElement>document.querySelector('#titulo')
        this._inputAutor = <HTMLInputElement>document.querySelector('#autor')
        this._inputEditora = <HTMLInputElement>document.querySelector('#editora')
        this._inputAno = <HTMLInputElement>document.querySelector('#ano')
        this._inputAvaliacao = <HTMLInputElement>document.querySelector('#avaliacao')

        this._livros = new Livros;

        this._livrosView = new LivrosView("#livrosview");
        this._livrosView.update(this._livros);
        
    }

    public cadastrar(event: Event){

        event.preventDefault()

        let livro = new Livro(
            this._inputTitulo.value,
            this._inputAutor.value,
            this._inputEditora.value,
            parseInt(this._inputAno.value),
            parseFloat(this._inputAvaliacao.value)
        )

        //console.log(livro);

        this._livros.adicionar(livro);
        
        //this._livros.exibirLivros().forEach(livro => console.log(livro));

        this._livrosView.update(this._livros);

    }




}