export interface Message {
  id: number;
  photo: null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const messages: Message[] = [
  {
    id: 0,
    photo: null,
    firstName: 'Matt',
    lastName: 'Chorsey',
    email: 'matt.c@company.com',
    phoneNumber: "+19024808865"
  },
  {
    id: 1,
    photo: null,
    firstName: 'Lauren',
    lastName: 'Ruthford',
    email: 'lauren.r@company.com',
    phoneNumber: "+19024765243"
  },
  {
    id: 2,
    photo: null,
    firstName: 'Jordan',
    lastName: 'Firth',
    email: 'jordan.f@company.com',
    phoneNumber: "+19024837543"
  }/*,
  {
    firstName: 'Bill Thomas',
    sub: 'The situation',
    date: 'Yesterday',
    id: 3
  },
  {
    firstName: 'Joanne Pollan',
    sub: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4
  },
  {
    firstName: 'Andrea Cornerston',
    sub: 'Last minute ask',
    date: 'Yesterday',
    id: 5
  },
  {
    firstName: 'Moe Chamont',
    sub: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6
  },
  {
    firstName: 'Kelly Richardson',
    sub: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7
  }*/
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);
