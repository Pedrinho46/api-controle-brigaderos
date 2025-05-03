import mongoose from 'mongoose';

export const PersonSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    telefone: { type: String },
    observacoes: { type: String },
  },
  { timestamps: true, collection: 'pessoas' },
);
