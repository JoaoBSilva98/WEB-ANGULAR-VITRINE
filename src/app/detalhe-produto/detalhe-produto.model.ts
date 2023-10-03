export class DetalheProduto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;

    constructor(id: number, nome: string, preco: number, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}
