import { useState } from "react"
import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"
import {NextPageContext} from 'next';

export interface LayoutProps {
    children: React.ReactNode;
    global: any;
    pageContext: NextPageContext
}

const Layout = ({ children, global, pageContext }: LayoutProps) => {
  const { navbar, footer, notificationBanner } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
