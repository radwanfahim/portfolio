import { Route, Router } from "@solidjs/router";
import Root from "./Root";
import "./App.css";
import Nav from "./Shared/Nav/Nav";
import Scroll from "./Shared/Scroll/Scroll";
import { createSignal, onMount, Show } from "solid-js";
import Loading from "./component/Loading/Loading";
import AOS from "aos";
import { loadLinks } from "./lib/linkStorage";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    setTimeout(() => {
      setLoading(false);
      loadLinks();
      AOS.init(); // Moved here
      AOS.refresh(); // Ensures animations are recalculated
    }, 2000);
  });

  return (
    <>
      <Show when={loading()}>
        <Loading />
      </Show>

      <div class={loading() ? "hidden" : ""}>
        <Nav />
        <Router>
          <Route path="/" component={Root} />
        </Router>
        <Scroll />
      </div>
    </>
  );
}

export default App;
