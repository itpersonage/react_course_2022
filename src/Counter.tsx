import React, { useState } from 'react';

type TCounter = {
  title: string;
};

export const Counter = (props: TCounter) => {
  const { title } = props;

  const [count, setCount] = useState(0);
  const [countStep, setCountStep] = useState(1);

  const addCount = () => {
    setCount((prev) => prev + countStep);
  };

  const delCount = () => setCount(count - countStep);

  const addStep = () => {
    setCountStep(countStep + 1);
  };
  const delStep = () => {
    setCountStep(countStep - 1);
  };
  return (
    <div>
      <h5>{title}</h5>
      <p>{`${count} штук добавлено`}</p>
      <div>
        <button type="button" onClick={addCount}>
          добавить {countStep} ед.
        </button>
        <button type="button" onClick={delCount}>
          удалить {countStep} ед.
        </button>
      </div>
      <div>
        <button type="button" onClick={addStep}>
          add step 1
        </button>
        <button type="button" onClick={delStep}>
          del step 1
        </button>
      </div>
    </div>
  );
};
