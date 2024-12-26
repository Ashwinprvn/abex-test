import React from 'react';
import { Input } from "@/components/ui/input";

interface SubjectInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SubjectInput = ({ value, onChange, placeholder = "Enter subject..." }: SubjectInputProps) => {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mb-4"
    />
  );
};

export default SubjectInput;