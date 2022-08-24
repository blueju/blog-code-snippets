import Login from "../components/Login";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const RouterConfig = [
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/home",
    component: Home,
    auth: true
  },
  {
    path: "/404",
    component: NotFound,
    auth: false
  }
];

export default RouterConfig;
