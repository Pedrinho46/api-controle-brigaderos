import mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema(
  {
    ingrediente: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingrediente', required: true },
    quantidade_por_brigadeiro: { type: Number, required: true },
  },
  { timestamps: true, collection: 'receitas' },
);
