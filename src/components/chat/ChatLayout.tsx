import React from 'react';
import { Contact } from '@/types/message';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';
import AddContactDialog from '../AddContactDialog';

interface ChatLayoutProps {
  messages: any[];
  contacts: Contact[];
  currentSubject: string | null;
  newSubject: string;
  isAddContactOpen: boolean;
  onContactSelect: (contact: Contact) => void;
  onThreadSelect: (subject: string) => void;
  onNewChat: () => void;
  onAddContact: (email: string) => void;
  onAddContactOpenChange: (open: boolean) => void;
  onMessageSend: (content: string) => void;
  onSubjectSubmit: (subject: string) => void;
}

const ChatLayout = ({
  messages,
  contacts,
  currentSubject,
  newSubject,
  isAddContactOpen,
  onContactSelect,
  onThreadSelect,
  onNewChat,
  onAddContact,
  onAddContactOpenChange,
  onMessageSend,
  onSubjectSubmit,
}: ChatLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar 
        messages={messages}
        contacts={contacts}
        onContactSelect={onContactSelect}
        onThreadSelect={onThreadSelect}
        currentSubject={currentSubject}
        onNewChat={onNewChat}
      />
      
      <ChatMain
        messages={messages}
        currentSubject={currentSubject}
        newSubject={newSubject}
        onMessageSend={onMessageSend}
        onSubjectSubmit={onSubjectSubmit}
        onAddContactClick={() => onAddContactOpenChange(true)}
      />

      <AddContactDialog 
        open={isAddContactOpen}
        onOpenChange={onAddContactOpenChange}
        onSubmit={onAddContact}
      />
    </div>
  );
};

export default ChatLayout;