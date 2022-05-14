import "./main.css";
import "./app";
import "./pages/one-char/one-char.page.js";
import "./pages/home/home.page"
import "./pages/all-char/all-chars.pages"
import "./components/navbar/navbar"

import { Router } from "@vaadin/router";

const outlet = document.getElementById("outlet");
const router = new Router(outlet);

router.setRoutes([
    { path: "/", component: "home-page"},
    { path: "/character", component: "card-person"},
    { path: "/people", component: "card-people"}

])
