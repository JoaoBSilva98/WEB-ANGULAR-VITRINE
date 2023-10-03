export class DetalheProduto {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagemUrl: string;
      

    constructor(id: number, nome: string, preco: number, descricao: string, imagemUrl: string) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
    }
}
