import { mongoose, prop } from '@typegoose/typegoose';
import { ContactClass } from 'src/contacts/contacts.model';

export class ListClass {
  @prop({ required: true })
  name: string;
  @prop({ required: true, default: [] })
  public contacts: mongoose.Types.Array<ContactClass>;
}
