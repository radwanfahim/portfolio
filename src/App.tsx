import { Route, Router, useLocation } from "@solidjs/router";
import Root from "./Root";
import "./App.css";
import Nav from "./Shared/Nav/Nav";
import Scroll from "./Shared/Scroll/Scroll";
import { createSignal, onMount, Show, createEffect } from "solid-js";
import type { ParentComponent, ParentProps } from "solid-js";
import Loading from "./component/Loading/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogPage from "./component/Blog/BlogPage";
import Footer from "./Shared/Footer/Footer";

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

  function withnNav(props: ParentProps) {
    return (
      <>
        <Nav />
        {props.children}
      </>
    );
  }

  return (
    <main>
      <Show when={loading()}>
        <Loading />
      </Show>

      <div class={loading() ? "hidden" : ""}>
        <Router root={RouteTracker}>
          <Route component={withnNav}>
            <Route path="/" component={Root} />
            <Route path="/blog/:id" component={BlogPage} />
          </Route>
        </Router>
        <Footer />
        <Scroll />
      </div>
    </main>
  );
}

export default App;
