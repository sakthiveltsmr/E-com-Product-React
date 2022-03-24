import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcons from "@material-ui/icons/ShoppingCart";
import {
  Grid,
  AppBar,
  Icon,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
  List,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linespace: {
    padding: theme.spacing(1, 1),
  },
  rootCard: {
    width: 250,
  },
  bulletCard: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  titleCard: {
    fontSize: 20,
  },
  posCard: {
    marginBottom: 12,
  },
  footeBox: {
    width: "100%",
    backgroundColor: "#3f51b5",
    position: "fixed",
    bottom: "2px",
    marginLeft: "0px",
    marginBottom: "-2px",
    height: "130px",
  },
  footerList: {
    textAlign: "center",
  },
}));
const Product = () => {
  return <div></div>;
};

export default Product;
