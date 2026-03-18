import { Route, Router, useLocation } from "@solidjs/router";
import Root from "./Root";
import "./App.css";
import Nav from "./Shared/Nav/Nav";
import Scroll from "./Shared/Scroll/Scroll";
import { createSignal, onMount, Show, createEffect } from "solid-js";
import type { ParentComponent } from "solid-js"; 
import Loading from "./component/Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";

declare function gtag(...args: any[]): void;

const RouteTracker: ParentComponent = (props) => {
  const location = useLocation();

  createEffect(() => {
    if (typeof gtag !== "undefined") {
      gtag("event", "page_view", {
        page_path: location.pathname,
        page_search: location.search,
      });
    }
  });

  return <>{props.children}</>;
};

function App() {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    setTimeout(() => {
      setLoading(false);
      AOS.init();
      AOS.refresh();
    }, 2000);
  });

  return (
    <main>
      <Show when={loading()}>
        <Loading />
      </Show>

      <div class={loading() ? "hidden" : ""}>
        <Nav />
        <Router root={RouteTracker}>
          <Route path="/" component={Root} />
        </Router>
        <Scroll />
      </div>
    </main>
  );
}

export default App;
