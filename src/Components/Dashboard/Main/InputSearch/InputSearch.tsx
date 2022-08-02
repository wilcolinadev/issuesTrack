import React from "react";
import { FormBox } from "./InputSearchStyles";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../../../state/actions/actionCreators";

const InputSearch: React.FC = () => {
  const dispatch = useDispatch();
  const { handleInputSearch } = bindActionCreators(ActionCreators, dispatch);
  return (
    <FormBox>
      <form method="get" action="">
        <div className="tb">
          <div className="td">
            <input
              type="text"
              placeholder="Search record"
              required
              onChange={(e) => handleInputSearch(e.currentTarget.value)}
            />
          </div>
          <div className="td" id="s-cover">
            <button type="submit">
              <IoSearch />
            </button>
          </div>
        </div>
      </form>
    </FormBox>
  );
};

export default InputSearch;
