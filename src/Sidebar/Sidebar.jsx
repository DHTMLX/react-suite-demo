import { useEffect, useRef, useState } from "react";
import { Sidebar } from "@dhx/trial-suite";
import { getData } from "../data";

export default function SidebarComponent () {
  const { sidebarData } = getData();
  let [sidebar, setSidebar] = useState(null);
  const sidebar_container = useRef(null);

  useEffect(() => {
    const sidebar = new Sidebar(sidebar_container.current, {});
    setSidebar(sidebar);
    return () => {
      sidebar?.destructor();
    };
  }, []);

  useEffect(() => {
    if (!sidebar) return;
    sidebar.events.on("click", (id) => {
      if (id === "toggle") {
        const toggleItem = sidebar.data.getItem("toggle");
        sidebar.toggle();
        toggleItem.icon = sidebar.config.collapsed
          ? "mdi mdi-menu"
          : "mdi mdi-backburger";
      }
    });
    sidebar.data.parse(sidebarData);
  }, [sidebar]);

  return <div ref={sidebar_container} className="dhx_widget--border_right"></div>;
};
