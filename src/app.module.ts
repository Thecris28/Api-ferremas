import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { SeedModule } from './seed/seed.module';


@Module({
  imports: [ProductosModule, CategoriasModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
