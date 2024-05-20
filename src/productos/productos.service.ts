import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class ProductosService {

  private products: Producto[] = [
    // {
    //   id: uuidv4(),
    //   marca: 'samsung',
    //   codigo: '123',
    //   nombre: 'celular',
    //   categoriaId: 1,
    //   precio: 1000,
    //   stock: 10,
    //   createdAt: new Date(),
    // }
  ];



  create(createProductoDto: CreateProductoDto) {
    const {marca, codigo, nombre, categoriaId, precio, stock} = createProductoDto
    const newProduct = new Producto(
      uuidv4(),
      marca,
      codigo,
      nombre,
      categoriaId,
      precio,
      stock,
      new Date(),
    );

    this.products.push(newProduct);
    return newProduct;
  }

  findByCategoria(id: number) {
    return this.products.filter(producto => producto.categoriaId === id);
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    const producto = this.products.find(producto => producto.id === id);
    if(!producto){
      throw new NotFoundException(`El producto con id ${id} no existe`)
    }
    return producto;
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    let productoDb = this.findOne(id)
    this.products = this.products.map(product => {
      if(product.id === id){
        productoDb.updatedAt = new Date()
        productoDb = {...productoDb, ...updateProductoDto}
        return productoDb
      }
      return product
    })

    return productoDb;
  }

  remove(id: string) {
    const producto = this.findOne(id)
    
    this.products = this.products.filter(producto => producto.id !== id);
    return `El producto con id #${id} fue eliminado`;
  }

  addProductSeed(productos: Producto[]) {
    this.products = productos;
  }
}
