interface ChatHeaderProps {
  subject: string | null;
}

const ChatHeader = ({ subject }: ChatHeaderProps) => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-xl font-semibold">
        {subject ? subject.replace(/^Re:\s*/i, '') : 'Select a chat or contact'}
      </h1>
    </div>
  );
};

export default ChatHeader;