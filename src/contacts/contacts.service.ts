import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContactClass } from './contacts.model';
import { CreateContactDto } from './dto/create-contact.dto';
import { ReturnModelType } from '@typegoose/typegoose';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(ContactClass.name)
    private contactsModel: ReturnModelType<typeof ContactClass>
  ) {}

  async create(createContactDto: CreateContactDto): Promise<ContactClass> {
    const createdContact = new this.contactsModel(createContactDto);
    await createdContact.save();
    return createdContact._id;
  }

  async modify(
    id: number,
    updateContactDto: UpdateContactDto
  ): Promise<ContactClass> {
    const filter = { _id: id };
    const res = await this.contactsModel.updateOne(filter, updateContactDto);
    return res;
  }

  async findOne(id: number) {
    const filter = { _id: id };
    const contact = await this.contactsModel.findOne(filter);
    return contact;
  }
}
