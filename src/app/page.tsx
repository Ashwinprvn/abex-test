'use client';
import ChatLayout from "@/components/chat/ChatLayout";
import { useChat } from "@/hooks/useChat";
import { sampleMessages } from "@/data/sampleMessages";
import { init, id } from '@instantdb/react';
import { i, InstaQLEntity } from "@instantdb/react";

const APP_ID = "27959ecb-beb2-4669-b8a4-a03610d670ad";

const schema = i.schema({
  entities: {
    emails: i.entity({
      account_id: i.string(),
      created: i.number(),
      date: i.number(),
      from: i.string(),
      from_name: i.string(),
      id: i.string(),
      message_id: i.string(),
      snippet: i.string(),
      subject: i.string(),
      updated: i.number(),
    }),
  },
});

type Email = InstaQLEntity<typeof schema, "emails">;

function addEmail(emailData: {
  account_id: string;
  created: number;
  date: number;
  from: string;
  from_name: string;
  id: string;
  message_id: string;
  snippet: string;
  subject: string;
  updated: number;
}) {
  db.transact(
    db.tx.emails[id()].update({
      ...emailData,
    })
  );
}

function deleteEmail(email: Email) {
  db.transact(db.tx.emails[email.id].delete());
}

function EmailList({ emails }: { emails: Email[] }) {
  return (
    <div style={styles.todoList}>
      {emails.map((email) => (
        <div key={email.id} style={styles.todo}>
          <div style={styles.todoText}>
            <strong>From:</strong> {email.from_name} ({email.from})
          </div>
          <div style={styles.todoText}>
            <strong>Subject:</strong> {email.subject}
          </div>
          <div style={styles.todoText}>
            <strong>Snippet:</strong> {email.snippet}
          </div>
          <span onClick={() => deleteEmail(email)} style={styles.delete}>
            𝘟
          </span>
        </div>
      ))}
    </div>
  );
}


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