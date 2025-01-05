import Home from "../pages/Home";
import Following from "../pages/Following";
import Friend from "../pages/Friend";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../component/Layout";
import Search from "../pages/Search";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/friend",
    component: Friend,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
