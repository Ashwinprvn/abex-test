import React from 'react';
import ChatHeader from '../ChatHeader';
import MessageBubble from '../MessageBubble';
import MessageInput from '../MessageInput';
import SubjectInput from '../SubjectInput';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface ChatMainProps {
  messages: any[];
  currentSubject: string | null;
  newSubject: string;
  onMessageSend: (content: string) => void;
  onSubjectSubmit: (subject: string) => void;
  onAddContactClick: () => void;
}

const ChatMain = ({
  messages,
  currentSubject,
  newSubject,
  onMessageSend,
  onSubjectSubmit,
  onAddContactClick,
}: ChatMainProps) => {
  const [messageContent, setMessageContent] = React.useState('');

  const handleSendMessage = () => {
    if (messageContent.trim()) {
      onMessageSend(messageContent);
      setMessageContent('');
    }
  };

  const filteredMessages = currentSubject
    ? messages
        .filter(msg => msg.subject.replace(/^Re:\s*/i, '') === currentSubject.replace(/^Re:\s*/i, ''))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : [];

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b flex justify-between items-center">
        <ChatHeader subject={currentSubject} />
        <Button
          variant="outline"
          size="icon"
          onClick={onAddContactClick}
          className="ml-2"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!currentSubject && (
          <SubjectInput
            value={newSubject}
            onChange={onSubjectSubmit}
            placeholder="Enter subject for new conversation..."
          />
        )}
        {filteredMessages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isCurrentUser={message.from === 'me@example.com'}
          />
        ))}
      </div>

      {(currentSubject || newSubject) && (
        <MessageInput
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          onSend={handleSendMessage}
          disabled={!currentSubject && !newSubject}
        />
      )}
    </div>
  );
};

export default ChatMain;