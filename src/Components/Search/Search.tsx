import { useState, FormEvent } from "react";
import style from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";

interface ISerachProps {
  Search: (user: string) => void;
}

export default function Search({ Search }: ISerachProps) {
  const [inputText, setInputText] = useState<string>("");

  function Submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    Search(inputText);
  }

  return (
    <div className={style.Search}>
      <form className={style.Search_Form} onSubmit={Submit} autoComplete="off">
        <label htmlFor="search">
          <BsSearch className={style.Search_Icon} />
        </label>
        <input
          className={style.Search_Input}
          type="search"
          placeholder="Search GitHub Username..."
          id="search"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          required
        />
        <button className={style.Search_Button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
