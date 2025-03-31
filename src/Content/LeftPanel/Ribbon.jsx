import { useEffect, useRef, useState } from "react";
import { Ribbon } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function RibbonComponent() {
  const { ribbonData } = getData();
  const ribbon_container = useRef(null);

  useEffect(() => {
    const ribbon = new Ribbon(ribbon_container.current, {
      data: ribbonData,
      css: "dhx_widget--bordered"
    });

    return () => ribbon.destructor();
  }, []);

  return <div ref={ribbon_container} className="dhx_widget--bordered ribbon_container" />;
}
