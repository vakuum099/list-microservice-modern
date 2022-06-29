import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ListClass } from './lists.model';

@Module({
  imports: [TypegooseModule.forFeature([ListClass])],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule {}
