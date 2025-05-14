import { useEffect, useRef } from "react";
import { Sidebar } from "@dhx/trial-suite";
import { getData } from "../data";

export default function SidebarComponent () {
  const { sidebarData } = getData();

  const sidebar_container = useRef(null);

  useEffect(() => {
    const sidebar = new Sidebar(sidebar_container.current, {
      data: JSON.parse(JSON.stringify(sidebarData)),
    });

    sidebar.events.on("click", (id) => {
      if (id === "toggle") {
        const toggleItem = sidebar.data.getItem("toggle");
        sidebar.toggle();
        toggleItem.icon = sidebar.config.collapsed
          ? "mdi mdi-menu"
          : "mdi mdi-backburger";
      }
    });
    
    return () => {
      sidebar?.destructor();
    };
  }, []);

  return <div ref={sidebar_container} className="dhx_widget--border_right"></div>;
};
