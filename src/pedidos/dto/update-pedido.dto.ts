import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsString } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsString()
    estado: string;
}
