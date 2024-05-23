import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PedidosModule } from './pedidos/pedidos.module';



@Module({
  imports: [ConfigModule.forRoot(),ProductosModule, CategoriasModule, SeedModule, AuthModule, PedidosModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
