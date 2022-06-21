import React, { useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Record from "./Record";
import { getDatabase, set, ref, get } from "firebase/database";
import { db } from "../../../../Firebase/firebase";

const Records: React.FC = () => {
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );

  const activeUser = useSelector((state: RootStateOrAny) => state.isUserAuth);

  const getRecords = async () => {

      const db = getDatabase();
      const issuesRef = await ref(db, "issues/" + activeUser.user.uid);
      const userData = await get(issuesRef);
    try {
      console.log(userData.val());
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getRecords().then((response) => {});
  }, []);

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
