import Router from "next/router";
import Link from "next/link";

export default function Home() {
  const goToAuthHandler = () => {
    Router.push("/auth");
  };

  return (
    <>
      <h2>Home page</h2>

      <Link href="/users/555">
        <a>User 555</a>
      </Link>

      <button onClick={goToAuthHandler}>Go to auth</button>
    </>
  );
}
