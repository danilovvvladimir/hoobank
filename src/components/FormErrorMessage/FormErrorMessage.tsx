import React, { FC } from "react";

import "./FormErrorMessage.scss";

interface FormErrorMessageProps {
  children: any;
}

const FormErrorMessage: FC<FormErrorMessageProps> = ({ children }) => {
  return <div className="form__error-message">{children}</div>;
};

export default FormErrorMessage;
