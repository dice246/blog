import React  from "react";

export function Search(props) {
  let {match, history, location } = props;
  const { id} = match.params;

  return(
    <div>
      <h1>search: {id}</h1>
    </div>
  )

}

export default Search;
