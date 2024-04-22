import React, { FC, PropsWithChildren } from "react";

const SectionLayout: FC<PropsWithChildren<{ bg?: boolean }>> = ({
  children,
  bg,
}) => {
  return (
    <section className={`${bg ? "bg-blue1" : "bg-white1"} py-16 w-full`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default SectionLayout;
