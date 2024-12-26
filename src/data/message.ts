export interface Message {
  account_id: string;
  created: string;
  date: string;
  from: string;
  from_name: string;
  id: string;
  message_id: string;
  snippet: string;
  subject: string;
  updated: string;
}

export interface Contact {
  from: string;
  from_name: string;
}
