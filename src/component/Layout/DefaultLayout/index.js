import Header from "../components/Header";
import Sidebar from "./Sidebar";
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="Sidebar">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
