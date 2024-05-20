import { IsString, IsUppercase, MinLength, } from "class-validator";

export class CreateCategoriaDto {

    @IsString()
    @MinLength(1)
    nombre: string
}
