import { useEffect } from "react";
import ConnectedGoals from "./Goals";
import ConnectedTodos from "./Todo";
import { connect } from "react-redux";
import { handleInitialData  } from "../actions/shared";
import { useState } from "react"

const App = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  if (props.loading === true) {
    return <h3>Loading</h3>;  
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  );
};

export default connect((state) => ({
  loading: state.loading,
}))(App);