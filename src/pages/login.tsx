import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { useRouter } from "next/router";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useSafeSetState } from "react-admin";
import { Notification } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

const userCreds = {
  email: "admin",
  password: "admin",
};

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const [notify, setNotify] = React.useState("nothing");

  React.useEffect(() => {}, [notify]);
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      userCreds.email === data.get("email") &&
      userCreds.password === data.get("password")
    ) {
      // notifySuccess("Nice! We are redirecting.....");
      localStorage.setItem("authorized", "true");
      router.push("/admin");
      setNotify("submitting");
    } else {
      // notifyError("Error", "Double check your credentials");
      setNotify("error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {notify === "error" && (
        <Notification
          icon={<IconX size="1.1rem" />}
          color="red">
          Bummer! Double check you credentials
        </Notification>
      )}
      {notify === "submitting" && (
        <Notification
          loading
          title="Nice. We are redirecting..."
          withCloseButton={false}></Notification>
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In To Admin panel
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
