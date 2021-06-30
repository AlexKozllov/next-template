import { MainLayout } from "../../LayOut/MainLayOut";
import s from "./users.module.scss";

export default function User() {
  return (
    <MainLayout>
      <h2 className={s.myH2}>All Users</h2>
    </MainLayout>
  );
}
