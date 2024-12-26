import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onSend: () => void;
  disabled: boolean;
}

const MessageInput = ({ value, onChange, onKeyPress, onSend, disabled }: MessageInputProps) => {
  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2 max-w-4xl mx-auto">
        <Input
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="Type your message..."
          className="rounded-full"
          disabled={disabled}
        />
        <Button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="rounded-full"
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;