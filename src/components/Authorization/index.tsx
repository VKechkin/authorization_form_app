import React, { useState, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

import { ServerError } from "../ServerError";

import useAppNavigation from "../../hooks";

import { IProps } from "../../interfaces";

import { Inputs } from "../../types";

import { getUsers } from "../../services";

import AppContext from "../../store";

import users from "../../const/users.json";

import * as S from "./styles";

export type TResult = {
  login: string;
  password: string;
};

const Authorization: React.FC<IProps> = (props) => {
  const { goProfile } = useAppNavigation();

  const { userName, setUserName } = useContext(AppContext);

  const [userError, setUserError] = useState("");

  const getUsers = (log: string, pass: string) => {
    const user = users.find((el) => el.login === log && el.password === pass);

    const promise = new Promise((resolve, reject) => {
      if (user) {
        resolve(user);
      } else {
        const err = new Error(`Пользователя ${log} не существует`);
        reject(err);
      }
    });

    const getNormalUser = () => {
      promise
        .then((result: any) => {
          goProfile();
          setUserName(() => result.login);
          console.log("promise good", result);
        })
        .catch((err) => {
          console.log("promise bed");
          setUserError(() => err.message);
        });
    };

    getNormalUser();
  };

  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm<Inputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { login, password } = data;

    try {
      getUsers(login, password);
      console.log("try");
    } catch (e) {
      console.log("eeeee", e);
    }
  };

  return (
    <S.DivWrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {userError && <ServerError>{userError}</ServerError>}
          <S.Label>Логин</S.Label>
          <S.Input
            error={errors.login?.message}
            {...register("login", {
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Логин должен быть минимум 3 символа",
              },
              maxLength: {
                value: 35,
                message: "Логин может быть максимум 35 символов",
              },
            })}
          />
          {errors.login && <ErrorMessage message={errors?.login?.message} />}
        </div>
        <div>
          <S.Label>Пароль</S.Label>
          <S.Input
            error={errors.password?.message}
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
            type="password"
          />
          {errors.password && (
            <ErrorMessage message={errors?.password?.message} />
          )}
        </div>
        <S.CheckboxWrapper>
          <S.InputCheckbox
            type="checkbox"
            id="save-password"
            {...register("checkbox")}
          />
          <S.Label htmlFor="save-password">Запомнить пароль</S.Label>
        </S.CheckboxWrapper>
        <S.Button type="submit">
          {/* <S.Button type="submit" disabled={userError ? !isValid : isValid}> */}
          Войти
        </S.Button>
      </S.Form>
    </S.DivWrapper>
  );
};

export { Authorization };
