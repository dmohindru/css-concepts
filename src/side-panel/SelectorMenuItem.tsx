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
        { linkTitle: "Exercise 8", linkUrl: "/selector/exercise8" },
        { linkTitle: "Exercise 9", linkUrl: "/selector/exercise9" },
        { linkTitle: "Exercise 10", linkUrl: "/selector/exercise10" },
        { linkTitle: "Exercise 11", linkUrl: "/selector/exercise11" },
        { linkTitle: "Exercise 12", linkUrl: "/selector/exercise12" },
        { linkTitle: "Exercise 13", linkUrl: "/selector/exercise13" },
        { linkTitle: "Exercise 14", linkUrl: "/selector/exercise14" },
        { linkTitle: "Exercise 15", linkUrl: "/selector/exercise15" },
        { linkTitle: "Exercise 16", linkUrl: "/selector/exercise16" },
        { linkTitle: "Exercise 17", linkUrl: "/selector/exercise17" },
        { linkTitle: "Exercise 18", linkUrl: "/selector/exercise18" },
        { linkTitle: "Exercise 19", linkUrl: "/selector/exercise19" },
        { linkTitle: "Exercise 20", linkUrl: "/selector/exercise20" },
      ]}
    />
  );
};

export default SelectorMenuItem;
