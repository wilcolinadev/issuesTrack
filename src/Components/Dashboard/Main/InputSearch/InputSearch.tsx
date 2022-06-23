import React from "react";
import { FormBox } from "./InputSearchStyles";
import { IoSearch } from "react-icons/io5";

const InputSearch: React.FC = () => {
  return (
    <FormBox>
      <form method="get" action="">
        <div className="tb">
          <div className="td">
            <input type="text" placeholder="Search record" required />
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
