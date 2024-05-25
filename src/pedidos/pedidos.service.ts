import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { ProductosService } from 'src/productos/productos.service';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class PedidosService {

  private pedidos : Pedido[] = [] 

  constructor( 
    private readonly productosService: ProductosService
  ){

  }
  create(createPedidoDto: CreatePedidoDto) {

    const {userId, estado, items, total} = createPedidoDto

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
      message: 'pedido creado',
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
    const pedido = this.pedidos.find(pedido => pedido.id === id);
    if(!pedido) throw new NotFoundException(`El pedido con el id:${id} no existe`);
    const updatePedido = {
      ...pedido,
      estado
    }
    this.pedidos = this.pedidos.map(pedido => pedido.id === id ? updatePedido : pedido)
    return updatePedido
  }

}
