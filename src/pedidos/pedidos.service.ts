import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
import { ProductosService } from 'src/productos/productos.service';

@Injectable()
export class PedidosService {

  private pedidos : Pedido[] = [] 

  constructor( 
    private readonly productosService: ProductosService
  ){

  }
  create(createPedidoDto: CreatePedidoDto) {
    return 'This action adds a new pedido';
  }

  findAll() {
    return `This action returns all pedidos`;
  }

  findOne(id: string) {
    const pedido = this.pedidos.find(pedido => pedido.id === id);
    if(!pedido) throw new NotFoundException(`El pedido con el id:${id} no existe`);
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
