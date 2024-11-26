import { useEffect, useRef } from "react";
import { Tabbar } from "@dhx/trial-suite";

const TabbarComponent = () => {
  const node = useRef(null);

  useEffect(() => {
    const newTabbar = new Tabbar(node.current, {
      tabAlign: "center",
      disabled: ["reports", "tickets", "users", "applications"],
      views: [
        { id: "dashboard", tab: "Dashboard" },
        { id: "reports", tab: "Reports" },
        { id: "tickets", tab: "Tickets" },
        { id: "users", tab: "Users" },
        { id: "applications", tab: "Applications" },
      ],
    });

    return () => {
      newTabbar.destructor();
    };
  }, []);

  return <div ref={node}></div>;
};

export default TabbarComponent;
