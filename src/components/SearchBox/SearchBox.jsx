import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";

function SearchBox() {
  const value = useSelector(selectNameFilter)
  const dispatch = useDispatch()
  return (
    <div>
      <fieldset className={css.box}>
        <legend className={css.label}>Find contacts by name</legend>
        <input
          className={css.field}
          type="search"
          name="searchContact"
          value={value}
          onChange={(event) => {
            const searchName = event.target.value.toLowerCase().trim()
            dispatch(changeFilter({searchName}))
          }}
        />
      </fieldset>
    </div>
  );
}

export default SearchBox;
