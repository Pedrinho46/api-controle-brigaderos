import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SaleSchema } from './interface/sale.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ingrediente', schema: SaleSchema }])
  ],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
