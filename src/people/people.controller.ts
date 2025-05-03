import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';


@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

}
