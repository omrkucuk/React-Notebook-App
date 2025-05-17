import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Login() {
  const { changePage, userLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({ userName: "", password: "" });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const success = userLogin(formData);
    if (success) {
      changePage("home");
    } else {
      alert("Kullanıcı adı veya şifre hatalı!");
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            marginTop: 8,
            borderRadius: 3,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="h5" color={blue[700]} mb={3} textAlign="center">
            Giriş Yap
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2}>
                <TextField
                  id="userName"
                  name="userName"
                  label="Kullanıcı Adı"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  value={formData.userName}
                />
              </Stack>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="filled-adornment-password">
                  Şifre
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Şifre"
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Giriş Yap
              </Button>
            </Stack>
          </form>
          <Stack
            direction={"row"}
            gap={2}
            sx={{ marginTop: "10px" }}
            alignItems={"center"}
          >
            <p style={{ display: "inline-block" }}>Hesabın yok mu?</p>
            <Link
              href="#"
              underline="none"
              padding={1}
              borderRadius={1}
              sx={{
                ":hover": {
                  backgroundColor: "rgba(202, 215, 231, 0.3);",
                },
              }}
              onClick={() => changePage("register")}
            >
              Kayıt ol
            </Link>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
