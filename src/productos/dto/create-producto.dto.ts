import { Type } from "class-transformer";
import { IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductoDto {

    @IsString()
    marca: string;

    @IsString()
    codigo: string;

    @IsString()
    nombre: string;
    
    @IsNumber()
    @Type(() => Number)
    precio: number;

    @IsNumber()
    @Type(() => Number)
    stock: number;
}
