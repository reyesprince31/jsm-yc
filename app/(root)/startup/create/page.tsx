import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { StartupForm } from "../../_components/startup-form";
import { use } from "react";

function Create() {
  const session = use(auth());

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
}

export default Create;
