export interface Contact {
    id: number;
    name: string;
    email: string;
    thumbnailUrl: string;
  }
  
  export type RootStackParamList = {
    Home: undefined;
    Contacts: undefined;
    ContactDetail: { id: number }; 
  };
  