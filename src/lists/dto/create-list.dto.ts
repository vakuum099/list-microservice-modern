import { ContactClass } from 'src/contacts/contacts.model';

export class CreateListDto {
  name: string;
  contacts: ContactClass[];
}
