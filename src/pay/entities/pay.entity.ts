export class Pay {
    id: string;
    pedidoId: string;
    userId: string;
    name: string;
    description?: string;
    price: number;
    createdAt: Date;
    status: string;
}
