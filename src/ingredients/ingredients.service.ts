import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient } from './interface/ingredient.interface';
import { Model } from 'mongoose';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel('Ingrediente')
    private readonly ingredientModel: Model<Ingredient>,
  ) {}
  async criarIngrediente(data: CreateIngredientDto): Promise<Ingredient> {
    const camposFaltando = [];
  
    if (!data.nome) {
      camposFaltando.push('nome');
    }
  
    if (!data.preco_unitario) {
      camposFaltando.push('preco_unitario');
    }
  
    if (!data.quantidade_comprada) {
      camposFaltando.push('quantidade_comprada');
    }
  
    if (!data.unidade) {
      camposFaltando.push('unidade');
    }
  
    if (camposFaltando.length > 0) {
      throw new BadRequestException(`Os seguintes campos são obrigatórios e estão faltando: ${camposFaltando.join(', ')}`);
    }
  
    const novo = new this.ingredientModel(data);
    return novo.save();
  }
  async listarIngredientes(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async buscarPorId(id: string): Promise<Ingredient> {
    const ingrediente = await this.ingredientModel.findById(id).exec();
    if (!ingrediente) throw new NotFoundException('Ingrediente não encontrado');
    return ingrediente;
  }

async buscarPorNome(nome: string): Promise<Ingredient[]> {
    return this.ingredientModel.find({
      nome: { $regex: nome, $options: 'i' }
    }).exec();
  }

  async atualizarIngrediente(
    id: string,
    data: Partial<CreateIngredientDto>,
  ): Promise<Ingredient> {
    const atualizado = await this.ingredientModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!atualizado)
      throw new NotFoundException('Ingrediente não encontrado para atualizar');
    return atualizado;
  }

  async excluirIngrediente(id: string): Promise<Ingredient> {
    const removido = await this.ingredientModel.findByIdAndDelete(id).exec();
    if (!removido)
      throw new NotFoundException('Ingrediente não encontrado para exclusão');
    return removido;
  }
}
