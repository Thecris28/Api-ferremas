
import { IsString } from 'class-validator';

export class UpdatePedidoDto {
    @IsString()
    estado: string;
}
