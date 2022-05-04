import "./main.css";
import "./app";
import "./pages/one-char.page.js";
import "./pages/home.page"
import "./pages/all-chars.pages"

import { Router } from "@vaadin/router";

const outlet = document.getElementById("outlet");
const router = new Router(outlet);

router.setRoutes([
    { path: "/", component: "home-page"},
    { path: "/card", component: "card-person"},
    { path: "/people", component: "card-people"}

])
