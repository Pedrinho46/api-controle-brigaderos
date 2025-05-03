import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesService } from './sales.service';


@Controller('api/v1/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}


}
