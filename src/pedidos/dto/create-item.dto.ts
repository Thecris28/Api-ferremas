import { IsNumber, IsPositive, IsString } from "class-validator";


export class CreateItemDto {
    @IsString()
    productId: string;

    @IsNumber()
    @IsPositive()
    quantity: number;
}