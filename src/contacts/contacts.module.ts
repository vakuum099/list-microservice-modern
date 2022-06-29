import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { ContactClass } from './contacts.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forFeature([ContactClass])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
