import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { InputNameType } from './types';
import { Input } from './Input';

type Props = {};

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 60px 15px;
  background-color: #f2f0f2;
`;

const Title = styled.h1`
  margin-bottom: 60px;
  & > span {
    color: #cc8efe;
  }
`;

const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SubmitButton = styled.input`
  padding: 10px 15px;
  background-color: #cc8dff;
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease all;

  &:hover {
    background-color: #b45efb;
  }
`;
const ResetButton = styled.button`
  font-weight: 600;
  padding: 0;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const HelpLink = styled.a`
  color: #b45efb;
  text-decoration: none;
  transition: 0.3s ease all;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactForm: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (value: string, inputType: InputNameType) => {
    setFormData({ ...formData, [inputType]: value });
  };

  const handleReset = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    emailjs.send('service_ebt8g79', 'template_8dh12h9', formData, 'iqEUCBifj1sILgKuk').then(
      response => {
        console.log('SUCCESS!', response);
      },
      error => {
        console.log('ERROR!', error);
      }
    );
  };

  return (
    <StyledForm onSubmit={sendEmail}>
      <Title>
        <span>Contact</span> Us
      </Title>
      <Inputs>
        <Input value={formData.name} name={'name'} type={'text'} onChange={handleChange} />
        <Input value={formData.email} name={'email'} type={'email'} onChange={handleChange} />
        <Input value={formData.phone} name={'phone'} type={'number'} onChange={handleChange} />
        <Input value={formData.subject} name={'subject'} type={'text'} onChange={handleChange} />
      </Inputs>
      <Input textarea={true} value={formData.message} name={'message'} type={'text'} onChange={handleChange} />
      <Actions>
        <Buttons>
          <SubmitButton type="submit" value="Send Message" />
          <ResetButton onClick={handleReset}>Reset Form</ResetButton>
        </Buttons>
        <HelpLink href="https://ukraine-helpers.com" target="_blank">
          Need Help?
        </HelpLink>
      </Actions>
    </StyledForm>
  );
};
