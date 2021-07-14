import { prop } from '@typegoose/typegoose';

export class ContactClass {
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  email: string;
}
