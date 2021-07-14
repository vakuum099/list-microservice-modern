import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';

@Controller('list')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Post()
  async create(@Body() createListDto: CreateListDto) {
    return await this.listsService.create(createListDto);
  }

  @Post(':_id')
  addContact(@Param('_id') _id: string, @Body() contactId: { id: string }) {
    return this.listsService.addContact(_id, contactId.id);
  }

  @Get(':_id')
  async findOne(@Param('_id') _id: string) {
    return await this.listsService.findOne(_id);
  }
}
