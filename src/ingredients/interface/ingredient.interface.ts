import { Document } from 'mongoose';

export interface Ingredient extends Document {
  readonly nome: string;
  readonly preco_unitario: number;
  readonly quantidade_comprada: number;
  readonly unidade: string;
  readonly data_compra: Date;
}
