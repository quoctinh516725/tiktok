import Home from "../pages/Home";
import Following from "../pages/Following";
import Friend from "../pages/Friend";
import Upload from "../pages/Upload";
import { HeaderOnly } from "../component/Layout";
import Search from "../pages/Home copy";
const publicRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Following",
    component: Following,
  },
  {
    path: "/Friend",
    component: Friend,
  },
  {
    path: "/Upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/Search",
    component: Search,
  },
];
const privateRouter = [];
export { publicRouter, privateRouter };
