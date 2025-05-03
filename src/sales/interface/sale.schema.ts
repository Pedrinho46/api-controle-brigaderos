import mongoose from 'mongoose';

export const SaleSchema = new mongoose.Schema(
  {
    pessoa: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa' },
    quantidade: { type: Number, required: true },
    data: { type: Date, default: Date.now },
    pagou: { type: Boolean, default: false },
    pegou: { type: Boolean, default: false },
    tipo: { type: String, enum: ['venda', 'encomenda'], default: 'venda' },
  },
  { timestamps: true, collection: 'vendas' },
);
