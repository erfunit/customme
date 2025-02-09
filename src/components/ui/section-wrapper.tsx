import React from 'react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex flex-col gap-2 my-40">{children}</div>;
};

export default SectionWrapper;
