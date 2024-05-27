import { Module } from '@nestjs/common';
import { PayService } from './pay.service';
import { PayController } from './pay.controller';
import { PedidosModule } from 'src/pedidos/pedidos.module';

@Module({
  controllers: [PayController],
  providers: [PayService],
  imports: [ PedidosModule],
})
export class PayModule {}
