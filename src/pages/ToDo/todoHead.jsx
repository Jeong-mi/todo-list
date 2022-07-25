import styled from "styled-components";
import { maxims, dayOfWeek } from "../../constant";
import { QuoteLeft, QuoteRight } from "../../components/Icon";

const Maxim = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function TodoHead() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();

  return (
    <header className="m-8">
      <h1 className="text-3xl">
        {year}년 {month}월 {date}일
      </h1>
      <h2 className="mt-3 text-xl text-gray-400">{dayOfWeek[day]}요일</h2>
      <Maxim className="mt-5">
        <QuoteLeft />
        <p className="font-semibold leading-7 text-center whitespace-pre-wrap bg-gradient-to-t from-green-100">
          {maxims[Math.floor(Math.random() * maxims.length)]}
        </p>
        <QuoteRight />
      </Maxim>
    </header>
  );
}

export default TodoHead;
