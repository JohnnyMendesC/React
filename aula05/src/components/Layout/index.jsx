import { Headers } from "../Headers"
import { Outlet, Link } from "react-router-dom"


export const Layout = () => {
  return (
    <div>
        <Headers />
        <Outlet />
        <Link />
    </div>
  )
}
