import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

const useValidateEmailPass = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(input);
    setIsValidEmail(isValidEmail);
    setEmail(input);
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z0-9]).{8,15}$/;

    const isValidPassword = regex.test(password);
    setIsValidPassword(isValidPassword);
    setPassword(password);
  };

  return {
    isValidEmail,
    validateEmail,
    email,
    validatePassword,
    isValidPassword,
    password,
    setEmail,
    setPassword,
  };
};

export default useValidateEmailPass;
