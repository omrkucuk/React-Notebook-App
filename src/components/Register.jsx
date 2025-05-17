import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Paper,
  InputLabel,
  Link,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { UserContext } from "../context/UserContext";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  // eslint-disable-next-line no-unused-vars
  const { state, userRegister, changePage } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password === formData.rePassword) {
      userRegister(formData);
      console.log("Kullanıcı Verileri: ", formData);
      alert("Kayıt başarıyla tamamlandı!");
    } else {
      alert("Şifreler uyuşmuyor!");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
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
          Kayıt Ol
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={2}>
              <TextField
                id="name"
                name="name"
                label="Ad"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                id="surname"
                name="surname"
                label="Soyad"
                variant="outlined"
                fullWidth
                value={formData.surname}
                onChange={handleChange}
              />
            </Stack>

            <TextField
              id="userName"
              name="userName"
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              value={formData.userName}
              onChange={handleChange}
            />

            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="filled-adornment-password">Şifre</InputLabel>
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

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="filled-adornment-password">
                Şifre Tekrarı
              </InputLabel>

              <OutlinedInput
                id="repassword"
                name="rePassword"
                type={showRePassword ? "text" : "password"}
                value={formData.rePassword}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showRePassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowRePassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showRePassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Şifre Tekrarı"
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Kayıt Ol
            </Button>
          </Stack>
        </form>
        <Stack
          direction={"row"}
          gap={2}
          sx={{ marginTop: "10px" }}
          alignItems={"center"}
        >
          <p style={{ display: "inline-block" }}>Hesabın var mı?</p>
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
            onClick={() => changePage("login")}
          >
            Giriş Yap
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
}
