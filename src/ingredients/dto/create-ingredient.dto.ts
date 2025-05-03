import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  preco_unitario: number;

  @IsNumber()
  quantidade_comprada: number;

  @IsString()
  @IsNotEmpty()
  unidade: string;

  @IsOptional()
  data_compra?: Date;
}
