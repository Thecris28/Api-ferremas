export class Pedido {
    id: string;
    userId: string;
    items:{
            productId: string;
            quantity: number;
          }[];
    estado: string;
    total: number;
    createdAt: Date;
}
