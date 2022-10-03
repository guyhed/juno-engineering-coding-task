import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { css } from "@emotion/css";

const wrapper = css({    
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width:"100%",
    height: "100%"
})

const Preloader = () => <div className={wrapper} data-testid="Preloader"><CircularProgress size={70} /></div>
export default Preloader