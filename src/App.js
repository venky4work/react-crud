import "./App.css";
import { Route, Switch } from "react-router";
import MetadataList from "./pages/metadata-list";
import AddMetadata from "./pages/add-metadata";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <AddMetadata/>
          <MetadataList></MetadataList>
        </Route>
        <Route path="/add">
          <MetadataList></MetadataList>
        </Route>
        <Route path="/edit">
          <MetadataList></MetadataList>
        </Route>
        <Route>
          <p>404 Not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
