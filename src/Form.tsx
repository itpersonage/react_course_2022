import React from 'react';

type TFormTitle = {
  title: string;
  children: React.ReactNode;
};

export const Form = ({ title, children }: TFormTitle) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="form_input">{children}</div>
    </div>
  );
};
