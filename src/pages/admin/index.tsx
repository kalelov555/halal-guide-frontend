import { RestarauntCard } from "@/components/RestarauntCard/RestarauntCard";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import { getAdminRestatauntsListAction } from "@/store/restaraunts/action";
import { Badge } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AdminPanel() {
  const router = useRouter();
  const { adminRestaraunts, status } = useAppSelector(
    (state) => state.restaraunts
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem("authorized"))
      router.push("/login");

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
            <h1>pending restaraunts</h1>
          </Badge>
          <Link
            style={{ color: "#fff" }}
            href="/admin/active">
            <h1>active restaraunts</h1>
          </Link>
        </div>
        <div style={{ width: "75%" }}>
          <h1 style={{ marginTop: "20px" }}>
            Pending Restaurants
          </h1>
          {adminRestaraunts.map((restaraunt) => (
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
