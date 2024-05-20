import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductosModule } from 'src/productos/productos.module';
import { CategoriasModule } from 'src/categorias/categorias.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductosModule, CategoriasModule],
})
export class SeedModule {}
