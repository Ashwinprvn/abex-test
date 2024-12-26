import { useState } from 'react';
import { Contact, Message } from '@/types/message';
import { useToast } from "@/components/ui/use-toast";

export const useChat = (initialMessages: Message[]) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);
  const [newSubject, setNewSubject] = useState('');
  const [isAddContactOpen, setIsAddContactOpen] = useState(false);
  const { toast } = useToast();

  const handleAddContact = (email: string) => {
    const newContact: Contact = {
      from: email,
      from_name: email.split('@')[0]
    };
    
    setContacts(prevContacts => [...prevContacts, newContact]);
    
    toast({
      title: "Contact Added",
      description: `${email} has been added to your contacts.`,
    });
    
    setIsAddContactOpen(false);
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim() || !(currentSubject || newSubject)) return;

    const message: Message = {
      id: Date.now().toString(),
      from_name: 'Me',
      from: 'me@example.com',
      subject: currentSubject || newSubject,
      snippet: content,
      date: new Date().toISOString(),
      account_id: 'acc_' + Date.now(),
      created: new Date().toISOString(),
      message_id: 'msg_' + Date.now(),
      updated: new Date().toISOString(),
    };

    setMessages(prev => [...prev, message]);
    
    if (newSubject) {
      setCurrentSubject(newSubject);
      setNewSubject('');
    }
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully.",
    });
  };

  const handleContactSelect = (contact: Contact) => {
    const newSubject = `Chat with ${contact.from_name}`;
    setCurrentSubject(newSubject);
    toast({
      title: "Chat Started",
      description: `Starting conversation with ${contact.from_name}`,
    });
  };

  const handleThreadSelect = (subject: string) => {
    setCurrentSubject(subject);
  };

  const handleNewChat = () => {
    setCurrentSubject(null);
    setNewSubject('');
    toast({
      title: "New Chat",
      description: "Start a new conversation by entering a subject",
    });
  };

  return {
    messages,
    contacts,
    currentSubject,
    newSubject,
    setNewSubject,
    isAddContactOpen,
    setIsAddContactOpen,
    handleAddContact,
    handleSendMessage,
    handleContactSelect,
    handleThreadSelect,
    handleNewChat,
  };
};