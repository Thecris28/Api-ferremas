export class Producto {

    constructor(
        public id: string,
        public marca: string,
        public codigo: string,
        public nombre: string,
        public categoriaId: number,
        public precio: number,
        public stock: number,
        public createdAt: Date,
        public updatedAt?: Date
    ){}
}
