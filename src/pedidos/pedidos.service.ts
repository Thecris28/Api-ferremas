import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { ProductosService } from 'src/productos/productos.service';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class PedidosService {

  private pedidos : Pedido[] = [
    {
    "id": "14c82ecc-e24e-4c25-8c7a-634c262f4019",
    "userId": "5d1ddc14-5260-441b-8429-cbd9ca3e38af",
    "estado": "en espera",
    "items": [
        {
            "productId": "88a3fa65-5138-4720-8674-9263677d8b3a",
            "quantity": 3
        },
        {
            "productId": "8377fd5d-cf89-4c0b-8a20-e57b781a9dfe",
            "quantity": 4
        }
    ],
    "total": 40000,
    "createdAt": new Date(),
  }
  ] 


  constructor( 
    private readonly productosService: ProductosService
  ){

  }
  create(createPedidoDto: CreatePedidoDto) {

    const {userId, estado, items, total} = createPedidoDto

    const user = this.pedidos.find(pedido => pedido.userId === userId && pedido.estado === 'en espera');
    if(user) throw new NotFoundException(`No puede realizar mas pedidos hasta que pague el pedido anterior`);

    if(!total){
      const total = items.reduce((suma, item) => {
        const product = this.productosService.findOne(item.productId)
        return suma + (product.precio * item.quantity);
      }, 0)
      return total
  
    }
    
    const newPedido = {
      id: uuidv4(),
      userId,
      estado,
      items,
      total: +total,
      createdAt: new Date()
    }
    

    this.pedidos.push(newPedido)

    console.log(newPedido)
    return {...newPedido,
      message: 'Pedido creado',
    }
   
  }

  findAll() {
    return this.pedidos;
  }

  findOne(id: string) {
    const pedido = this.pedidos.find(pedido => pedido.id === id);
    if(!pedido) throw new NotFoundException(`El pedido con el id:${id} no existe`);
    return pedido;
  }

  update(id: string, updatePedidoDto: UpdatePedidoDto) {
    const { estado } = updatePedidoDto
    console.log(estado)
    const pedido = this.pedidos.find(pedido => pedido.id === id);
    if(!pedido) throw new NotFoundException(`El pedido con el id:${id} no existe`);
    console.log(estado)
    const updatePedido = {
      ...pedido,
      estado
    }

    this.pedidos = this.pedidos.map(pedido => pedido.id === id ? updatePedido : pedido)
    return updatePedido
  }
  findPedido(userId: string, pedidoId: string) {

    const pedido = this.pedidos.find(pedido => pedido.userId === userId && pedido.id === pedidoId);

    const pedido2 = this.pedidos.find(pedido => pedido.userId === userId && pedido.id === pedidoId && pedido.estado === 'Pagado');

    if(pedido2) throw new NotFoundException(`El pedido con el id:${pedidoId} ya fue pagado`);

    if(!pedido) throw new NotFoundException(`El pedido con el id:${pedidoId} no existe`);
    const updatePedido = {
      ...pedido,
      estado: 'Pagado'
    }
    this.pedidos = this.pedidos.map(pedido => {
      if(pedido.id === pedidoId && pedido.userId === userId){
        return updatePedido
      } 
    })


    return pedido

  }

}
