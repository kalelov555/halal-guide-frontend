import { RestarauntCard } from "@/components/RestarauntCard/RestarauntCard";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";
import {
  getAdminRestatauntsListAction,
  getRestarauntsListAction,
} from "@/store/restaraunts/action";
import { Loader, Notification } from "@mantine/core";
import { Badge } from "@mui/material";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const router = useRouter();
  const {
    restaraunts,
    adminRestaraunts,
    status,
    adminStatus,
  } = useAppSelector((state) => state.restaraunts);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("authorized"))
      router.push("/login");

    setIsLoading(false);
    dispatch(getRestarauntsListAction());
    dispatch(getAdminRestatauntsListAction());
  }, []);

  if (
    status === "idle" ||
    status === "loading" ||
    adminStatus === "idle" ||
    adminStatus === "loading" ||
    isLoading
  )
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Loader />
      </div>
    );

  if (!localStorage.getItem("authorized"))
    return (
      <>
        <Notification
          icon={<IconCheck size="1.1rem" />}
          color="red"
          title="Error!">
          You are not authorized
        </Notification>
        <Notification
          loading
          title="We are redirecting..."
          withCloseButton={false}
        />
      </>
    );

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
