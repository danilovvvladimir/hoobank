import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../Button/Button";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";

import "./Form.scss";

interface IFields {
  email: string;
  name: string;
  message: string;
}

interface FormProps {
  isModalActive: boolean;
  setIsModalActive: (state: boolean) => void;
}

const EMAIL_REGEX: RegExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const Form: FC<FormProps> = ({ setIsModalActive, isModalActive }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFields>({ mode: "onChange" });

  const [send, isSend] = useState(false);

  const onSubmit: SubmitHandler<IFields> = (data) => {
    console.log(data);
    reset();
    isSend(true);
    setTimeout(() => {
      isSend(false);
      setIsModalActive(false);
    }, 3000);
  };

  // if (send) {
  //   return (
  //     <div className="form__success-message">
  //       Спасибо, скоро мы с вами свяжемся!
  //     </div>
  //   );
  // }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label" htmlFor="name">
        Имя
        <input
          className="form__input"
          id="name"
          type="text"
          placeholder="Введите имя..."
          {...register("name", {
            required: {
              value: true,
              message: "Пожалуйста введите имя.",
            },
          })}
        />
        {errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </label>
      <label className="form__label" htmlFor="email">
        Email
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="Введите email..."
          {...register("email", {
            required: {
              value: true,
              message: "Пожалуйста введите email.",
            },
            pattern: {
              value: EMAIL_REGEX,
              message: "Введите корректный email.",
            },
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </label>
      <label className="form__label" htmlFor="message">
        Сообщение
        <textarea
          id="message"
          className="form__textarea"
          placeholder="Введите сообщение..."
          {...register("message", { required: false })}
        />
      </label>
      <Button>Отправить</Button>
      {send && (
        <div className="form__success-message">
          Спасибо, скоро мы с вами свяжемся!
        </div>
      )}
    </form>
  );
};

export default Form;
