import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRouter } from "./router";
import { DefaultLayout } from "./component/Layout";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1>React App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/Following">Following</Link>
              <Link to="/Friend">Friend</Link>
              <Link to="/Upload">Upload</Link>
              <Link to="/Search">Search</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {publicRouter.map((element, index) => {
            let Layout = DefaultLayout;
            if (element.layout) {
              Layout = element.layout;
            } else if (element.layout === null) {
              Layout = Fragment;
            }
            const Page = element.component;
            return (
              <Route
                key={index}
                path={element.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
