import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

interface Props {
  darkMode: boolean;
  onChange: () => void;
}

const navStyles: SxProps<Theme> = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.400",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header(props: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component={NavLink}
            key="/"
            to="/"
            sx={navStyles}
          >
            RE-STORE
          </Typography>
          <Switch defaultChecked={props.darkMode} onChange={props.onChange} />
        </Box>

        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => {
            return (
              <ListItem component={NavLink} key={path} to={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            );
          })}
        </List>

        <Box display="flex" alignItems="center">
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => {
              return (
                <ListItem
                  component={NavLink}
                  key={path}
                  to={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
