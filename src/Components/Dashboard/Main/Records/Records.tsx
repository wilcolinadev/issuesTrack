import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Record from "./Record";
import { getDatabase, ref, get } from "firebase/database";

const Records: React.FC = () => {
  const [remoteIssues, setRemoteIssues] = useState<object[] | never[]>([]);
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );
  const activeUser = useSelector((state: RootStateOrAny) => state.isUserAuth);

  const destructureObject = (object: object) => {
    let newArray: Array<object> = [];
    Object.values(object).forEach((issue: object) => {
      newArray.push(issue);
    });

    setRemoteIssues(newArray);
  };

  useEffect(() => {
    //Getting Database Issues
    const getRecords = async () => {
      const db = getDatabase();
      const issuesRef = await ref(db, "issues/" + activeUser.user.uid);
      let userIssues = await get(issuesRef);
      try {
        destructureObject(userIssues.val());
      } catch (e) {
        console.log("error");
      }
    };
    getRecords();
  }, []);

  const returnValues = () => {
    //Reorder Array

    //Combining local state of new Issues with remote Issues to show issues inmediately
    const combineArray = [...remoteIssues, ...activeIssues];
    combineArray.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <>
        {combineArray.map((issue) => {
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

  return <>{returnValues()}</>;
};

export default Records;
