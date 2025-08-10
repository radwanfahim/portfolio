import { createSignal } from "solid-js";
import { supabase } from "../lib/supabaseClient";

export interface Link {
  id: number;
  name: string;
  url: string;
}

const [links, setLinks] = createSignal<Link[]>([]);
const [loaded, setLoaded] = createSignal(false);

export async function loadLinks() {
  if (loaded()) return; // prevent re-fetch
  const { data, error } = await supabase.from("links").select("*");

  if (error) {
    console.error("Error fetching links:", error);
    return;
  }

  setLinks(data as Link[]);
  setLoaded(true);
}

export { links };
