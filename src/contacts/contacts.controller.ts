import { Controller, Post, Body, Param, Patch, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    return await this.contactsService.create(createContactDto);
  }

  @Patch(':_id')
  async modify(
    @Body() updateContactDto: UpdateContactDto,
    @Param('_id') _id: number
  ) {
    return await this.contactsService.modify(_id, updateContactDto);
  }

  @Get(':_id')
  findOne(@Param('_id') _id: number) {
    return this.contactsService.findOne(_id);
  }
}
