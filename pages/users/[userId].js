import { useRouter } from "next/dist/client/router";
import Router from "next/router";
export default function User() {
  const router = useRouter();

  const goToHomeHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <h2> User {router.query.userId}</h2>
      <button onClick={goToHomeHandler}>Go to Home</button>
    </>
  );
}
