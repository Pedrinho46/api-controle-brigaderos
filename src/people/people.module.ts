import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PersonSchema } from './interface/person.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ingrediente', schema:PersonSchema  }])
  ],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
