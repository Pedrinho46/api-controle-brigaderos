import mongoose from 'mongoose';

export const IngredientSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    preco_unitario: { type: Number, required: true },
    quantidade_comprada: { type: Number, required: true },
    unidade: { type: String, required: true },
    data_compra: { type: Date, default: Date.now },
  },
  { timestamps: true, collection: 'ingredientes' },
);