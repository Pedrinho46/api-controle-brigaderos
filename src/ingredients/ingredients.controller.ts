import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Controller('api/v1/ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  async criar(@Body() body: CreateIngredientDto) {
    return this.ingredientsService.criarIngrediente(body);
  }

  @Get()
  async listar() {
    return this.ingredientsService.listarIngredientes();
  }

  @Get(':id')
  async buscar(@Param('id') id: string) {
    return this.ingredientsService.buscarPorId(id);
  }
  @Get('buscar/nome/:nome')
async buscarPorNome(@Param('nome') nome: string) {
  return this.ingredientsService.buscarPorNome(nome);
}

  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() body: Partial<CreateIngredientDto>,
  ) {
    return this.ingredientsService.atualizarIngrediente(id, body);
  }

  @Delete(':id')
  async excluir(@Param('id') id: string) {
    return this.ingredientsService.excluirIngrediente(id);
  }
}
