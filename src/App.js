import "./App.css";
import { Route, Switch } from "react-router";
import MetadataList from "./pages/metadata-list";
import AddMetadata from "./pages/add-metadata";
import EditMetadata from "./pages/edit-metadata";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <AddMetadata/>
          <MetadataList></MetadataList>
        </Route>
        <Route path="/edit/:id" exact>
          <EditMetadata></EditMetadata>
        </Route>
        <Route>
          <p>404 Not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
