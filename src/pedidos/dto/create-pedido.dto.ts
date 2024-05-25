import { ArrayNotEmpty, IsArray, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateItemDto } from "./create-item.dto";
import { Type } from "class-transformer";



export class CreatePedidoDto {

    @IsString()
    userId: string;

    
    @IsArray()
    @ArrayNotEmpty()
    @Type(() => CreateItemDto)
    items: CreateItemDto[];
    
    @IsOptional()
    total?: string;
    
    @IsString()
    estado: string;
}
