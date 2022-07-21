import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { InputNameType, InputType } from '../types';

type Props = {
  name: InputNameType;
  type: InputType;
  value: string;
  textarea?: boolean;
  onChange: (value: string, type: InputNameType) => void;
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  margin-bottom: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
`;

const StyledInput = styled.input`
  width: 350px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1a1a1a;
  background-color: #e6d8e6;
`;

const TextareaLabel = styled(Label)`
  width: 100%;
  max-width: 800px;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 800px;
  padding: 20px 15px;
  border-radius: 5px;
  border: 1px solid #1a1a1a;
  background-color: #e6d8e6;
  resize: none;
  margin-bottom: 40px;
`;

export const Input: React.FC<Props> = ({ name, type, textarea, value, onChange }) => {
  const labelName = name === 'email' ? 'email address' : name === 'phone' ? 'phone number' : name;

  return (
    <>
      {textarea ? (
        <>
          <TextareaLabel>Message</TextareaLabel>
          <Textarea
            required={true}
            rows={10}
            placeholder="Enter your message"
            value={value}
            onChange={e => onChange(e.target.value, 'message')}
          />
        </>
      ) : (
        <InputWrapper>
          <Label>{labelName.toUpperCase()}</Label>
          <StyledInput
            formNoValidate
            required={true}
            placeholder={`Enter your ${labelName}`}
            value={value}
            onChange={e => onChange(e.target.value, name)}
            type={type}
          />
        </InputWrapper>
      )}
    </>
  );
};
