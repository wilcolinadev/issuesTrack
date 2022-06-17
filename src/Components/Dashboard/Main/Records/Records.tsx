import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Record from "./Record";

const Records: React.FC = () => {
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );
  return (
    <>
      {activeIssues.map((issue) => {
        return (
          <Record
            id={issue.id}
            name={issue.name}
            email={issue.email}
            phone={issue.phone}
            description={issue.description}
          />
        );
      })}
    </>
  );
};

export default Records;
