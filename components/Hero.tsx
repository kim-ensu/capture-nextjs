import React, { FC } from "react";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div>
      {/* Overlay */}
      <div />
      <div>
        <h1>Heading</h1>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;
