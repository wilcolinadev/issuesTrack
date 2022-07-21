import React, { useEffect, useState, useMemo } from "react";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import Record from "./Record";
import { getDatabase, ref, get } from "firebase/database";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../../../state/actions/actionCreators";

const Records: React.FC = () => {
  const dispatch = useDispatch();

  const { updateGraphValues, cleanIssues } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const activeIssues = useSelector(
    (state: RootStateOrAny) => state.activeIssues
  );
  const [remoteIssues, setRemoteIssues] = useState<object[] | never[]>([]);

  const activeUser = useSelector((state: RootStateOrAny) => state.isUserAuth);
  const issuesInput = useSelector((state: RootStateOrAny) => state.inputSearch);
  const isFetching = useSelector((state: RootStateOrAny) => state.isFetching);
  const destructureObject = (object: object) => {
    let newArray: Array<object> = [];
    Object.values(object).forEach((issue: object) => {
      newArray.push(issue);
    });

    setRemoteIssues(newArray);
  };
  const countRecords = (issues) => {
    let activeIssues = 0;
    let closedIssues = 0;
    issues.forEach((issue) => {
      if (!issue.active) {
        activeIssues++;
      } else {
        closedIssues++;
      }
    });

    updateGraphValues({ activeIssues, closedIssues });
  };
  const combineArray = [...remoteIssues, ...activeIssues];
  //Sorting Array by name
  combineArray.sort((a, b) => a.name.localeCompare(b.name));

  let filteredIssues = useMemo(
    () =>
      combineArray.filter((issue) => {
        //Checking if the name includes the value inputted by the user and returning an array with those values
        return issue.name.toLowerCase().includes(issuesInput.toLowerCase());
      }),
    [issuesInput, combineArray]
  );

  useEffect(() => {
    //Getting Database Issues
    const getRecords = async () => {
      const db = getDatabase();
      const issuesRef = await ref(db, "issues/" + activeUser.user.uid);
      let userIssues = await get(issuesRef);
      try {
        destructureObject(userIssues.val());
      } catch (e) {
        console.log("Empty remote Issues");
      }
    };

    getRecords();
    cleanIssues();
    setRemoteIssues([]);
  }, [isFetching]);

  useEffect(() => {
    countRecords(remoteIssues);
  }, [remoteIssues]);

  const returnValues = () => {
    if (filteredIssues.length > 0) {
      return (
        <>
          {filteredIssues.map((issue) => {
            return (
              <Record
                  key={issue.uid}
                id={issue.id}
                name={issue.name}
                email={issue.email}
                phone={issue.phone}
                description={issue.description}
                date={issue.date}
                active={issue.active}
                uid={issue.uid}
              />
            );
          })}
        </>
      );
    } else {
      return <p> Add yours first records above...</p>;
    }
  };

  return <>{returnValues()}</>;
};

export default Records;
