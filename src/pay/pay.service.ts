import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreatePayDto } from './dto/create-pay.dto';
import { UpdatePayDto } from './dto/update-pay.dto';
import { Pay } from './entities/pay.entity';
import { v4 as uuidv4 } from 'uuid'
import { PedidosService } from 'src/pedidos/pedidos.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
@UseGuards( AuthGuard)
export class PayService {

  constructor( private readonly pedidosService: PedidosService) {}

  private pay: Pay[] = []
  create(createPayDto: CreatePayDto) {
    const { name , description, userId , pedidoId} = createPayDto;

    const pedidos = this.pedidosService.findPedido( userId , pedidoId );


    if (pedidos.estado === 'Pagado') throw new NotFoundException(`El pedido con el id:${pedidoId} ya fue pagado`);


    const newPay: Pay = {
      id: uuidv4(),
      name,
      description,
      userId,
      pedidoId,
      price: pedidos.total,
      createdAt: new Date(),
      status: 'Pagado',
    }
    console.log(newPay)
    this.pay.push(newPay)

    return {...newPay, message:'Pago realizado con exito'};
  }


  findAll() {
    return this.pay;
  }

  findOne(id: string) {
    const pay = this.pay.find(pay => pay.id === id);
    if(!pay) throw new NotFoundException(`El pago con el id:${id} no existe`);
    return pay;
  }

  update(id: string, updatePayDto: UpdatePayDto) {
    
    return `This action updates a #${id} pay`;
  }

  
}
