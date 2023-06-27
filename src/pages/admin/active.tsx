import { RestarauntCard } from "@/components/RestarauntCard/RestarauntCard";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import {
  getAdminRestatauntsListAction,
  getRestarauntsListAction,
} from "@/store/restaraunts/action";
import { Badge } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminPanel() {
  const router = useRouter();
  const { restaraunts, adminRestaraunts, status } =
    useAppSelector((state) => state.restaraunts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem("authorized"))
      router.push("/login");

    dispatch(getRestarauntsListAction());
    dispatch(getAdminRestatauntsListAction());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}>
        <div
          style={{
            width: "25%",
            minHeight: "100vh",
            background: "#65b1e0",
            textAlign: "left",
            color: "#fff",
            paddingLeft: "20px",
          }}>
          <Badge
            style={{ marginTop: "30px" }}
            color="error"
            badgeContent={adminRestaraunts.length}>
            <Link style={{ color: "#fff" }} href="/admin">
              <h1>pending restaraunts</h1>
            </Link>
          </Badge>
          <h1>active restaraunts</h1>
        </div>
        <div style={{ width: "75%" }}>
          <h1 style={{ marginTop: "20px" }}>
            Active Restaurants
          </h1>
          {restaraunts.map((restaraunt) => (
            <div
              style={{ width: "60%", marginTop: "30px" }}>
              <RestarauntCard restaraunt={restaraunt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
