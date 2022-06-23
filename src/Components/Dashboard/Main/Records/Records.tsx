import React, { useEffect, useState, useMemo } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Record from "./Record";
import { getDatabase, ref, get } from "firebase/database";

const Records: React.FC = () => {
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );
  const [remoteIssues, setRemoteIssues] = useState<object[] | never[]>([]);

  const activeUser = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const issuesInput = useSelector((state: RootStateOrAny) => state.inputSearch);
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

  const combineArray = [...remoteIssues, ...activeIssues];
  //Sorting Array by name
  combineArray.sort((a, b) => a.name.localeCompare(b.name));

  const filteredIssues = useMemo(
    () =>
      combineArray.filter((issue) => {
        //Checking if the name includes the value inputted by the user and returning an array with those values
        return issue.name.toLowerCase().includes(issuesInput.toLowerCase());
      }),
    [issuesInput, combineArray]
  );

  const returnValues = () => {
    return (
      <>
        {filteredIssues.map((issue) => {
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
