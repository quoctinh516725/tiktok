import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRouter } from "./router";
import { DefaultLayout } from "./component/Layout";
function App() {
  return (
    <Router>
      <div className="wrapper">
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
