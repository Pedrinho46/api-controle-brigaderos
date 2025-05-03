import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { RecipeSchema } from './interface/recipe.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ingrediente', schema: RecipeSchema }])
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
