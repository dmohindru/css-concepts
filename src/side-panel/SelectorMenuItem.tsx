import React from "react";
import MenuItem from "./MenuItem";

const SelectorMenuItem: React.FC = () => {
  return (
    <MenuItem
      title="Selector"
      menuLinks={[
        { linkTitle: "Exercise 1", linkUrl: "/selector/exercise1" },
        { linkTitle: "Exercise 2", linkUrl: "/selector/exercise2" },
      ]}
    />
  );
};

export default SelectorMenuItem;
