import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "./routes/route";
const router = createBrowserRouter(Route);
export default function App() {
  return <RouterProvider router={router} />;
}
