import { format } from 'date-fns';
import { Message } from '@/types/message';

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

const MessageBubble = ({ message, isCurrentUser }: MessageBubbleProps) => {
  return (
    <div
      className={`flex ${
        isCurrentUser ? 'justify-end' : 'justify-start'
      } animate-message-appear`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isCurrentUser
            ? 'bg-imessage-blue text-white'
            : 'bg-imessage-gray text-black'
        }`}
      >
        {!isCurrentUser && (
          <div className="flex flex-col gap-1 mb-2">
            <div className="text-sm font-semibold">{message.from_name}</div>
            <div className="text-xs text-muted-foreground">{message.from}</div>
          </div>
        )}
        <div className="break-words">{message.snippet}</div>
        <div className="flex justify-between items-center mt-2 text-xs opacity-70">
          <span>{format(new Date(message.date), 'h:mm a')}</span>
          {new Date(message.updated) > new Date(message.date) && (
            <span className="italic ml-2">
              edited {format(new Date(message.updated), 'h:mm a')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;