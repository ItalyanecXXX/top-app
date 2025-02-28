import React from "react";
import { Button, Htag, Paragraph, Tag } from "@/components";

export default function Home() {
  return (
    <>
      <div>
        <Htag tag="h1">Текст</Htag>
        <Button appearance="primary" arrow="right">
          Кнопка
        </Button>
        <Button appearance="ghost" arrow="down">
          Кнопка
        </Button>
        <Paragraph size="base">
          Далеко-далеко за словесными горами в стране гласных, и согласных живут
          рыбные тексты. Снова ручеек раз образ пояс на берегу залетают,
          продолжил своих знаках свою букв дорогу, встретил всемогущая буквенных
          рот алфавит своего первую.
        </Paragraph>
        <Paragraph size="medium">
          Далеко-далеко за словесными горами в стране гласных, и согласных живут
          рыбные тексты. Снова ручеек раз образ пояс на берегу залетают,
          продолжил своих знаках свою букв дорогу, встретил всемогущая буквенных
          рот алфавит своего первую.
        </Paragraph>
        <Paragraph size="small">
          Далеко-далеко за словесными горами в стране гласных, и согласных живут
          рыбные тексты. Снова ручеек раз образ пояс на берегу залетают,
          продолжил своих знаках свою букв дорогу, встретил всемогущая буквенных
          рот алфавит своего первую.
        </Paragraph>
        <Tag size="s">Mal</Tag>
        <Tag size="m" color="red">
          Red
        </Tag>
        <Tag size="s" color="green">
          Green
        </Tag>
        <Tag color="primary">primary</Tag>
      </div>
    </>
  );
}
