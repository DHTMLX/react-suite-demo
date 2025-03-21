import { useEffect, useRef, useState } from "react";
import { Sidebar } from "@dhx/trial-suite";
import store from "../data";

const SidebarComponent = () => {
  let [sidebar, setSidebar] = useState(null);
  const node = useRef(null);

  useEffect(() => {
    const sidebar = new Sidebar(node.current, {});
    setSidebar(sidebar);
    return () => {
      sidebar.destructor();
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
    sidebar.data.parse(store.sidebarData);
  }, [sidebar]);

  return <div ref={node} className="dhx_widget--border_right"></div>;
};

export default SidebarComponent;
