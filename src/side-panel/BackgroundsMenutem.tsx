import React from "react";
import MenuItem from "./MenuItem";

const BackgroundMenuItem: React.FC = () => {
  return (
    <MenuItem
      title="Backgrounds"
      menuLinks={[
        { linkTitle: "Exercise 1", linkUrl: "/backgrounds/exercise1" },
        { linkTitle: "Exercise 2", linkUrl: "/backgrounds/exercise2" },
        { linkTitle: "Exercise 3", linkUrl: "/backgrounds/exercise3" },
        { linkTitle: "Exercise 4", linkUrl: "/backgrounds/exercise4" },
        { linkTitle: "Exercise 5", linkUrl: "/backgrounds/exercise5" },
        { linkTitle: "Exercise 6", linkUrl: "/backgrounds/exercise6" },
        { linkTitle: "Exercise 7", linkUrl: "/backgrounds/exercise7" },
        { linkTitle: "Exercise 8", linkUrl: "/backgrounds/exercise8" },
        { linkTitle: "Exercise 9", linkUrl: "/backgrounds/exercise9" },
        { linkTitle: "Exercise 10", linkUrl: "/backgrounds/exercise10" },
        { linkTitle: "Exercise 11", linkUrl: "/backgrounds/exercise11" },
        { linkTitle: "Exercise 12", linkUrl: "/backgrounds/exercise12" },
        { linkTitle: "Exercise 13", linkUrl: "/backgrounds/exercise13" },
        { linkTitle: "Exercise 14", linkUrl: "/backgrounds/exercise14" },
        { linkTitle: "Exercise 15", linkUrl: "/backgrounds/exercise15" },
        { linkTitle: "Exercise 16", linkUrl: "/backgrounds/exercise16" },
        { linkTitle: "Exercise 17", linkUrl: "/backgrounds/exercise17" },
        { linkTitle: "Exercise 18", linkUrl: "/backgrounds/exercise18" },
        { linkTitle: "Exercise 19", linkUrl: "/backgrounds/exercise19" },
        { linkTitle: "Exercise 20", linkUrl: "/backgrounds/exercise20" },
      ]}
    />
  );
};

export default BackgroundMenuItem;
