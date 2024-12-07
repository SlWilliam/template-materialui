import React, { useState } from "react";
import { Grid, FormControl, Input, FormHelperText } from "@mui/material";

const Login = () => {
  const [login, setLogin] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input
            id="login_nome"
            aria-describedby="login_nome_helper_text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Digite seu login"
          />
          <FormHelperText id="login_nome_helper_text">
            Insira o seu login.
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Login;
