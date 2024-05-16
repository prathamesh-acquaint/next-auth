import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const page = async () => {
  const session = await auth();
  return (
    <>
      <div>Settings {JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button>Logout</Button>
      </form>
    </>
  );
};

export default page;
