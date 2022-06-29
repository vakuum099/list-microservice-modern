import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';
import { ContactClass } from 'src/contacts/contacts.model';
import { CreateListDto } from './dto/create-list.dto';
import { ListClass } from './lists.model';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel(ListClass.name)
    private listsModel: ReturnModelType<typeof ListClass>
  ) {}

  async create(createListDto: CreateListDto): Promise<ListClass> {
    const createdList = new this.listsModel(createListDto);
    await createdList.save();
    return createdList._id;
  }

  async addContact(id: string, contactId: string): Promise<ListClass | null> {
    const ContactModel = getModelForClass(ContactClass);
    const contact = await ContactModel.findOne({ _id: contactId });
    const list = await this.findOne(id);
    list.contacts.push(contact);
    const res = await this.listsModel.replaceOne({ _id: id }, list);
    return res;
  }

  async findOne(id: string): Promise<ListClass | null> {
    const filter = { _id: id };
    const list = await this.listsModel.findOne(filter);
    return list;
  }
}
