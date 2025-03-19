import React from "react";
import MenuItem from "./MenuItem";

const SelectorMenuItem: React.FC = () => {
  return (
    <MenuItem
      title="Selector"
      menuLinks={[
        { linkTitle: "Exercise 1", linkUrl: "/selector/exercise1" },
        { linkTitle: "Exercise 2", linkUrl: "/selector/exercise2" },
        { linkTitle: "Exercise 3", linkUrl: "/selector/exercise3" },
        { linkTitle: "Exercise 4", linkUrl: "/selector/exercise4" },
        { linkTitle: "Exercise 5", linkUrl: "/selector/exercise5" },
        { linkTitle: "Exercise 6", linkUrl: "/selector/exercise6" },
        { linkTitle: "Exercise 7", linkUrl: "/selector/exercise7" },
      ]}
    />
  );
};

export default SelectorMenuItem;
