import {Text, useRouter, useText} from "@urban-bot/core";
import React from "react";

export const Main = () => {
  const { navigate } = useRouter();

  useText((event) => navigate(`/${event.text}`))
  return <Text>Приветствуем в боте для прохождения опросов. Введите id опроса</Text>
}