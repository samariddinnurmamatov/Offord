import React from "react";

const DefaultContainer = ({
  children,
  className,
  container,
}) => {
  const classNames = [container && "container mx-auto", className];

  return (
    <div className={classNames.join(" ")}>
      <div>{children}</div>
    </div>
  );
};

export default DefaultContainer;
