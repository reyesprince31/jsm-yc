import { client } from "@/sanity/lib/client";
import { Ping } from "./ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { use } from "react";

export function View({ id }: { id: string }) {
  const { views: totalViews } = use(
    client.withConfig({ useCdn: false }).fetch(STARTUP_VIEWS_QUERY, { id })
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
}
