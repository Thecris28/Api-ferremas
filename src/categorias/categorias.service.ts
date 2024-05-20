import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  private categorias: Categoria[] = [];
  private idContador = 6;


  create(createCategoriaDto: CreateCategoriaDto) {
    const { nombre } = createCategoriaDto;
    const newCategory = {
      id: ++this.idContador,
      nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      createdAt: new Date()
    }
    this.categorias.push(newCategory);
    return newCategory;
  }

  findAll() {
    return this.categorias;
  }

  findOne(id: number) {
    const categoria = this.categorias.find(categoria => categoria.id === id);
    if(!categoria){
      throw new NotFoundException(`La categoria con id ${id} no existe`)  
    }
    return categoria;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const { nombre } = updateCategoriaDto;
    let category = this.findOne(id);
    this.categorias = this.categorias.map(categoria => {
      if(categoria.id === id){
        category.updatedAt = new Date();
        category = {...category, ...updateCategoriaDto,
          nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1)};
        return category
        }
        return categoria;
    })
    return category;
  }

  remove(id: number) {
    const categoria = this.findOne(id);
    this.categorias = this.categorias.filter(categoria => categoria.id !== id);
    return `La categoria con el id #${id} fue eliminada`;
  }

  addCategoriaSeed(category: Categoria[]) {
    this.categorias = category;
  }
}
