import { useEffect, useRef, useState } from "react";
import { Ribbon } from "@dhx/trial-suite";
import store from "../../store";

export default function RibbonComponent() {
  const node = useRef(null);
  let [ribbon, setRibbon] = useState(null);

  useEffect(() => {
    const ribbon = new Ribbon(node.current, {
      css: "dhx_widget--bordered",
    });

    setRibbon(ribbon);

    // Cleanup
    return () => ribbon.destructor();
  }, []);

  useEffect(() => {
    if (!ribbon) return;
    ribbon.data.parse(store.ribbonData);
  }, [ribbon]);

  return (
    <div
      ref={node}
      className="bordered"
      style={{ padding: 50, background: "var(--dhx-background-primary)" }}
    />
  );
}
