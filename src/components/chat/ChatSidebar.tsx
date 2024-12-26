import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Users, MessageCircle, PlusCircle } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { format } from 'date-fns';
import { Contact, Message } from '@/types/message';

interface ChatSidebarProps {
  messages: Message[];
  contacts?: Contact[];
  onContactSelect?: (contact: Contact) => void;
  onThreadSelect?: (subject: string) => void;
  currentSubject?: string | null;
  onNewChat?: () => void;
}

const ChatSidebar = ({ messages, contacts = [], onContactSelect, onThreadSelect, currentSubject, onNewChat }: ChatSidebarProps) => {
  const [view, setView] = React.useState<"chats" | "contacts">("chats");

  const uniqueContacts = React.useMemo(() => {
    const allContacts = new Map<string, Contact>();
    
    // Add manually added contacts
    contacts.forEach(contact => {
      allContacts.set(contact.from, contact);
    });
    
    // Add contacts from messages if they're not already added
    messages.forEach(message => {
      if (!allContacts.has(message.from)) {
        allContacts.set(message.from, {
          from: message.from,
          from_name: message.from_name
        });
      }
    });
    
    return Array.from(allContacts.values());
  }, [messages, contacts]);

  const chatThreads = React.useMemo(() => {
    const threads = new Map<string, Message[]>();
    messages.forEach(message => {
      const baseSubject = message.subject.replace(/^Re:\s*/i, '');
      if (!threads.has(baseSubject)) {
        threads.set(baseSubject, []);
      }
      threads.get(baseSubject)?.push(message);
    });
    
    threads.forEach(thread => {
      thread.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
    });
    
    return Array.from(threads.entries());
  }, [messages]);

  return (
    <div className="w-80 border-r bg-background h-screen flex flex-col">
      <div className="p-4 border-b">
        <ToggleGroup type="single" value={view} onValueChange={(value) => value && setView(value as "chats" | "contacts")}>
          <ToggleGroupItem value="chats" aria-label="Toggle chats" className="flex-1">
            <MessageCircle className="h-4 w-4 mr-2" />
            Chats
          </ToggleGroupItem>
          <ToggleGroupItem value="contacts" aria-label="Toggle contacts" className="flex-1">
            <Users className="h-4 w-4 mr-2" />
            Contacts
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <ScrollArea className="flex-1">
        {view === "contacts" ? (
          <div className="p-4 space-y-2 relative h-full">
            {uniqueContacts.map((contact) => (
              <Button
                key={contact.from}
                variant={contact.from === currentSubject ? "secondary" : "ghost"}
                className="w-full justify-start p-4 h-auto"
                onClick={() => onContactSelect?.(contact)}
              >
                <div className="text-left">
                  <div className="font-medium">{contact.from_name}</div>
                  <div className="text-sm text-muted-foreground">{contact.from}</div>
                </div>
              </Button>
            ))}
            
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {chatThreads.map(([subject, messages]) => (
              <Button
                key={subject}
                variant={subject === currentSubject ? "secondary" : "ghost"}
                className="w-full justify-start p-4 h-auto"
                onClick={() => onThreadSelect?.(subject)}
              >
                <div className="text-left w-full space-y-1">
                  <div className="font-medium">{subject}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    <span className="font-medium">{messages[0].from_name}:</span> {messages[0].snippet}
                  </div>
                  <div className="text-xs text-muted-foreground flex justify-between items-center">
                    <span>{format(new Date(messages[0].date), 'MMM d, h:mm a')}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {messages.length}
                    </span>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
