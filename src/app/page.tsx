'use client';
import ChatLayout from "@/components/chat/ChatLayout";
import { useChat } from "@/hooks/useChat";
import { sampleMessages } from "@/data/sampleMessages";
import { supabase } from "@/lib/supabaseClient";

const testSupabase = async () => {
  const { data, error } = await supabase.from('metadata').select('*');
  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Fetched data:', data);
  }
};

testSupabase();


export default function Page() {
  const {
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
  } = useChat(sampleMessages);

  return (
    <ChatLayout
      messages={messages}
      contacts={contacts}
      currentSubject={currentSubject}
      newSubject={newSubject}
      isAddContactOpen={isAddContactOpen}
      onContactSelect={handleContactSelect}
      onThreadSelect={handleThreadSelect}
      onNewChat={handleNewChat}
      onAddContact={handleAddContact}
      onAddContactOpenChange={setIsAddContactOpen}
      onMessageSend={handleSendMessage}
      onSubjectSubmit={setNewSubject}
    />
  );
}