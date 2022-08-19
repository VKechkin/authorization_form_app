import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  checkbox: string;
  login: string;
  password: string;
};

const Authorization: FC = () => {
  const {
    formState: { errors, isValid, isSubmitted },
    register,
    handleSubmit,
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Логин</label>
      <input
        {...register("login", {
          required: "Обязательное поле",
          minLength: {
            value: 3,
            message: "Логин должен быть минимум 3 символа",
          },
          maxLength: {
            value: 15,
            message: "Логин может быть максимум 15 символов",
          },
        })}
        placeholder="Введите логин"
      />
      {errors.login && <span>{errors.login.message || "Error !"}</span>}
      <label>Пароль</label>
      <input
        {...register("password", {
          required: "Обязательное поле",
          minLength: {
            value: 3,
            message: "Пароль должен быть минимум 6 символов",
          },
          maxLength: {
            value: 15,
            message: "Пароль может быть максимум 20 символов",
          },
        })}
        placeholder="введите пароль"
        type="password"
      />
      {errors.password && <span>{errors?.password?.message || "Error !"}</span>}
      <div>
        <input type="checkbox" id="save-password" {...register("checkbox")} />
        <label htmlFor="save-password">Запомнить пароль</label>
      </div>
      <button type="submit" disabled={!isValid}>
        Войти
      </button>{" "}
    </form>
  );
};

export { Authorization };
