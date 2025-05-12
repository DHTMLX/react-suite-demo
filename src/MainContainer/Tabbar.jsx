import { useEffect, useRef } from "react";
import { Tabbar } from "@dhx/trial-suite";

export default function TabbarComponent () {
  const tabbar_container = useRef(null);

  useEffect(() => {
    const tabbar = new Tabbar(tabbar_container.current, {
      tabAlign: "center",
      disabled: ["reports", "tickets", "users", "applications"],
      views: [
        { id: "dashboard", tab: "Dashboard" },
        { id: "reports", tab: "Reports" },
        { id: "tickets", tab: "Tickets" },
        { id: "users", tab: "Users" },
        { id: "applications", tab: "Applications" }
      ]
    });

    return () => {
      tabbar?.destructor();
    };
  }, []);

  return <div ref={tabbar_container} className="tabbar_widget"></div>;
};
