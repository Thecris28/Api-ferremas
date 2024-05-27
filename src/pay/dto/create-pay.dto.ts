import { IsOptional, IsString, IsUUID } from "class-validator";

export class CreatePayDto {
    @IsString()
    name: string;

    @IsUUID()
    pedidoId: string;

    @IsUUID()
    userId : string;
    
    @IsString()
    @IsOptional()
    description?: string;
}
