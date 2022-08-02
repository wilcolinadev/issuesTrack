import { useEffect } from "react";
import { isEmpty } from "../Components/objectValidation";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/actions/actionCreators";
import { useNavigate } from "react-router-dom";

const useLocalStorage = () => {
  //Bringing the state from Redux
  const userState: Object = useSelector(
    (state: RootStateOrAny) => state.isUserAuth
  );
  //Bringing the actions from redux
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { logUserIn } = bindActionCreators(actionCreators, dispatch);
  //Get store data if we have any and replace the userData with the local storage

  // Redirect to the dashboard if our user data has been populated
  useEffect(() => {
    const redirectUser = () => {
      navigate("/dashboard");
    };
    const getStorageData = () => {
      const userData: string = localStorage.getItem("user") || "";
      if (!isEmpty(userData)) {
        logUserIn(JSON.parse(userData));
      }
    };
    getStorageData();
    if (!isEmpty(userState)) {
      redirectUser();
    }
  }, [userState]);
};
export default useLocalStorage;
