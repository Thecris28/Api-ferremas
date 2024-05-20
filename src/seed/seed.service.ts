import { Injectable } from '@nestjs/common';
import { CategoriasService } from 'src/categorias/categorias.service';
import { ProductosService } from 'src/productos/productos.service';
import { PRODUCTS_SEED } from './data/productos.seed';
import { CATEGORIAS_SEED } from './data/categorias.seed';


@Injectable()
export class SeedService {

  constructor(
    private readonly productosService: ProductosService,
    private readonly categoriasService: CategoriasService
  ) {}


  seedDB() {

    this.productosService.addProductSeed(PRODUCTS_SEED);
    this.categoriasService.addCategoriaSeed(CATEGORIAS_SEED)
    return `Seed ejecutado correctamente`;
  }
}
