import { useRoutes } from "react-router-dom";
import { NO_FOUND } from "./shared/data";

import NoFound from "./pages/NoFound/NoFound";
import { CONTACTS_ROUTES } from "./pages/Contacts/routes";
import { GALLERY_ROUTES } from "./pages/Gallery/routes";
import { HOME_ROUTERS } from "./pages/Home/routes";
import { BLOG_ROUTES } from "./pages/Blogs/routes";
import { Container } from "react-bootstrap";

const appRoutes = [
  HOME_ROUTERS,
  BLOG_ROUTES,
  GALLERY_ROUTES,
  CONTACTS_ROUTES,
  {
    path: NO_FOUND,
    element: <NoFound />,
  },
];

export default function Router() {
  const routes = useRoutes(appRoutes);
  return <Container>{routes}</Container>;
}
