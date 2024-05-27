import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';

import { ProductosModule } from 'src/productos/productos.module';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService],
  imports: [ProductosModule],
  exports: [PedidosService],
})
export class PedidosModule {}
