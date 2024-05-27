import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PedidosModule } from './pedidos/pedidos.module';
import { PayModule } from './pay/pay.module';



@Module({
  imports: [ConfigModule.forRoot(),ProductosModule, CategoriasModule, SeedModule, AuthModule, PedidosModule, PayModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
