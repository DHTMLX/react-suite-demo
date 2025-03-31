import { useRef, useEffect, useState } from "react";
import { Toolbar, setTheme } from "@dhx/trial-suite";
import { getData } from "../data";

export default function ToolbarComponent () {
  const { toolbarData } = getData();
  let [theme, setThemeState] = useState("light");
  let [contrast, setContrast] = useState(false);
  let [toolbar, setToolbar] = useState(null);
  const toolbar_container = useRef(null);

  useEffect(() => {
    const toolbar = new Toolbar(toolbar_container.current, {
      data: toolbarData
    });
    setToolbar(toolbar);
    return () => toolbar?.destructor();
  }, []);

  useEffect(() => {
    if (!toolbar) return;
    toolbar.events.on("click", (id) => {
      switch (id) {
        case "theme": {
          const checked = !toolbar.data.getItem("theme").checked;
          toolbar.data.update("theme", {
            checked,
            icon: `mdi mdi-${
              !checked ? "weather-night" : "white-balance-sunny"
            }`,
          });
          setThemeState(checked ? "dark" : "light");
          break;
        }
        case "contrast": {
          setContrast(toolbar.data.getItem("contrast").active);
          break;
        }
      }
    });
    toolbar.data.parse(toolbarData);
  }, [toolbar]);

  useEffect(() => {
    setTheme(`${contrast ? "contrast-" : ""}${theme}`);
  }, [contrast, theme]);

  return <div ref={toolbar_container}></div>;
};
