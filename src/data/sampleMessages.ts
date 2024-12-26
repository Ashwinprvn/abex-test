import { Message } from '@/types/message';
import { Message } from './message';


export const sampleMessages: Message[] = [
  {
    "account_id": "acc456",
    "created": "2024-03-08 12:00:00.000Z",
    "date": "2024-03-08 11:55:00.000Z",
    "from": "hr1@company.com",
    "from_name": "HR Department",
    "id": "msg1",
    "message_id": "hr_msg1",
    "snippet": "Hello, we've received your application for the Software Engineer role.",
    "subject": "Software Engineer Application",
    "updated": "2024-03-08 12:00:00.000Z"
  },
  {
    "account_id": "acc456",
    "created": "2024-03-08 12:10:00.000Z",
    "date": "2024-03-08 12:05:00.000Z",
    "from": "candidate1@example.com",
    "from_name": "Candidate One",
    "id": "msg2",
    "message_id": "cand_msg1",
    "snippet": "Thank you for the confirmation.",
    "subject": "Software Engineer Application",
    "updated": "2024-03-08 12:10:00.000Z"
  },
  {
    "account_id": "acc456",
    "created": "2024-03-08 12:20:00.000Z",
    "date": "2024-03-08 12:15:00.000Z",
    "from": "hr1@company.com",
    "from_name": "HR Department",
    "id": "msg3",
    "message_id": "hr_msg2",
    "snippet": "We would like to move forward and schedule a first round interview. Are you available next week?",
    "subject": "Software Engineer Application",
    "updated": "2024-03-08 12:20:00.000Z"
  },
  {
    "account_id": "acc456",
    "created": "2024-03-08 12:30:00.000Z",
    "date": "2024-03-08 12:25:00.000Z",
    "from": "candidate1@example.com",
    "from_name": "Candidate One",
    "id": "msg4",
    "message_id": "cand_msg2",
    "snippet": "Yes, I am. What days work best for you?",
    "subject": "Software Engineer Application",
    "updated": "2024-03-08 12:30:00.000Z"
  },
  {
    "account_id": "acc789",
    "created": "2024-03-08 13:00:00.000Z",
    "date": "2024-03-08 12:55:00.000Z",
    "from": "hr2@company.com",
    "from_name": "HR Department",
    "id": "msg5",
    "message_id": "hr_msg3",
    "snippet": "We're currently reviewing applications for the Marketing Manager position.",
    "subject": "Marketing Manager Application",
    "updated": "2024-03-08 13:00:00.000Z"
  },
  {
    "account_id": "acc789",
    "created": "2024-03-08 13:10:00.000Z",
    "date": "2024-03-08 13:05:00.000Z",
    "from": "candidate2@example.com",
    "from_name": "Candidate Two",
    "id": "msg6",
    "message_id": "cand_msg3",
    "snippet": "Thanks for keeping me in the loop.",
    "subject": "Marketing Manager Application",
    "updated": "2024-03-08 13:10:00.000Z"
  },
  {
    "account_id": "acc789",
    "created": "2024-03-08 13:20:00.000Z",
    "date": "2024-03-08 13:15:00.000Z",
    "from": "hr2@company.com",
    "from_name": "HR Department",
    "id": "msg7",
    "message_id": "hr_msg4",
    "snippet": "We are impressed with your resume and would like to proceed with a brief phone interview. Would you be available on Thursday afternoon?",
    "subject": "Marketing Manager Application",
    "updated": "2024-03-08 13:20:00.000Z"
  },
  {
    "account_id": "acc789",
    "created": "2024-03-08 13:30:00.000Z",
    "date": "2024-03-08 13:25:00.000Z",
    "from": "candidate2@example.com",
    "from_name": "Candidate Two",
    "id": "msg8",
    "message_id": "cand_msg4",
    "snippet": "Yes, Thursday afternoon works for me.",
    "subject": "Marketing Manager Application",
    "updated": "2024-03-08 13:30:00.000Z"
  },
  {
    "account_id": "acc789",
    "created": "2024-03-08 13:40:00.000Z",
    "date": "2024-03-08 13:35:00.000Z",
    "from": "hr2@company.com",
    "from_name": "HR Department",
    "id": "msg9",
    "message_id": "hr_msg5",
    "snippet": "Great. We'll call you around 2 PM.",
    "subject": "Marketing Manager Application",
    "updated": "2024-03-08 13:40:00.000Z"
  },
  {
    "account_id": "acc101",
    "created": "2024-03-08 14:00:00.000Z",
    "date": "2024-03-08 13:55:00.000Z",
    "from": "hr3@company.com",
    "from_name": "HR Department",
    "id": "msg10",
    "message_id": "hr_msg6",
    "snippet": "We are interested in your profile for the Project Manager role. Could you please clarify some aspects of your experience?",
    "subject": "Project Manager Application",
    "updated": "2024-03-08 14:00:00.000Z"
  },
  {
    "account_id": "acc101",
    "created": "2024-03-08 14:10:00.000Z",
    "date": "2024-03-08 14:05:00.000Z",
    "from": "candidate3@example.com",
    "from_name": "Candidate Three",
    "id": "msg11",
    "message_id": "cand_msg5",
    "snippet": "I'm happy to help. What information would you like to have?",
    "subject": "Project Manager Application",
    "updated": "2024-03-08 14:10:00.000Z"
  },
  {
    "account_id": "acc101",
    "created": "2024-03-08 14:20:00.000Z",
    "date": "2024-03-08 14:15:00.000Z",
    "from": "hr3@company.com",
    "from_name": "HR Department",
    "id": "msg12",
    "message_id": "hr_msg7",
    "snippet": "Could you provide more details on your experience with agile project management?",
    "subject": "Project Manager Application",
    "updated": "2024-03-08 14:20:00.000Z"
  },
  {
    "account_id": "acc101",
    "created": "2024-03-08 14:30:00.000Z",
    "date": "2024-03-08 14:25:00.000Z",
    "from": "candidate3@example.com",
    "from_name": "Candidate Three",
    "id": "msg13",
    "message_id": "cand_msg6",
    "snippet": "Certainly, I have successfully led multiple projects using agile methodologies, with a focus on iterative development and team collaboration.",
    "subject": "Project Manager Application",
    "updated": "2024-03-08 14:30:00.000Z"
  },
  {
    "account_id": "acc112",
    "created": "2024-03-08 15:00:00.000Z",
    "date": "2024-03-08 14:55:00.000Z",
    "from": "hr4@company.com",
    "from_name": "HR Department",
    "id": "msg14",
    "message_id": "hr_msg8",
    "snippet": "Following your interview for the Data Analyst role, we'd like to request your professional references.",
    "subject": "Data Analyst Application",
    "updated": "2024-03-08 15:00:00.000Z"
  },
  {
    "account_id": "acc112",
    "created": "2024-03-08 15:10:00.000Z",
    "date": "2024-03-08 15:05:00.000Z",
    "from": "candidate4@example.com",
    "from_name": "Candidate Four",
    "id": "msg15",
    "message_id": "cand_msg7",
    "snippet": "No problem. I'll send over their contact details shortly.",
    "subject": "Data Analyst Application",
    "updated": "2024-03-08 15:10:00.000Z"
  },
  {
    "account_id": "acc112",
    "created": "2024-03-08 15:20:00.000Z",
    "date": "2024-03-08 15:15:00.000Z",
    "from": "hr4@company.com",
    "from_name": "HR Department",
    "id": "msg16",
    "message_id": "hr_msg9",
    "snippet": "Great, thank you. We will be in touch again soon",
    "subject": "Data Analyst Application",
    "updated": "2024-03-08 15:20:00.000Z"
  },
  {
    "account_id": "acc321",
    "created": "2024-03-08 16:00:00.000Z",
    "date": "2024-03-08 15:55:00.000Z",
    "from": "hr5@company.com",
    "from_name": "HR Department",
    "id": "msg17",
    "message_id": "hr_msg10",
    "snippet": "We're pleased to inform you that you're moving forward in the selection process for the UX Designer position. We'd like to invite you for a final round interview.",
    "subject": "UX Designer Application",
    "updated": "2024-03-08 16:00:00.000Z"
  },
  {
    "account_id": "acc321",
    "created": "2024-03-08 16:10:00.000Z",
    "date": "2024-03-08 16:05:00.000Z",
    "from": "candidate5@example.com",
    "from_name": "Candidate Five",
    "id": "msg18",
    "message_id": "cand_msg8",
    "snippet": "That's wonderful news. Thank you, I'm available for the final round interview.",
    "subject": "UX Designer Application",
    "updated": "2024-03-08 16:10:00.000Z"
  },
  {
    "account_id": "acc321",
    "created": "2024-03-08 16:20:00.000Z",
    "date": "2024-03-08 16:15:00.000Z",
    "from": "hr5@company.com",
    "from_name": "HR Department",
    "id": "msg19",
    "message_id": "hr_msg11",
    "snippet": "Could you do next Monday at 10 AM?",
    "subject": "UX Designer Application",
    "updated": "2024-03-08 16:20:00.000Z"
  },
  {
    "account_id": "acc321",
    "created": "2024-03-08 16:30:00.000Z",
    "date": "2024-03-08 16:25:00.000Z",
    "from": "candidate5@example.com",
    "from_name": "Candidate Five",
    "id": "msg20",
    "message_id": "cand_msg9",
    "snippet": "Yes, that time is perfect. I'll be there.",
    "subject": "UX Designer Application",
    "updated": "2024-03-08 16:30:00.000Z"
  }
];




