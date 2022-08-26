import type { NextPage } from "next";
import Head from "next/head";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>FPL NextJS app - HOME</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FPL NextJS App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
