import { useEffect, useRef } from "react";
import { Colorpicker, awaitRedraw } from "@dhx/trial-suite";

export default function ColorpickerComponent () {
  const colorpicker_container = useRef(null);

  const hexToHSLChema = (HEX) => {
    let r = 0,
      g = 0,
      b = 0;
    if (HEX.length == 4) {
      r = "0x" + HEX[1] + HEX[1];
      g = "0x" + HEX[2] + HEX[2];
      b = "0x" + HEX[3] + HEX[3];
    } else if (HEX.length == 7) {
      r = "0x" + HEX[1] + HEX[2];
      g = "0x" + HEX[3] + HEX[4];
      b = "0x" + HEX[5] + HEX[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return {
      h,
      s,
      l,
    };
  };

  useEffect(() => {
    const colorpicker = new Colorpicker(colorpicker_container.current, {
      mode: "picker",
    });

    colorpicker.setValue("#0288d1");
    colorpicker.events.on("change", (hex) => {
      const { h, s, l } = hexToHSLChema(hex);
      const el = document.documentElement;

      el.style.setProperty("--dhx-h-primary", h);
      el.style.setProperty("--dhx-s-primary", s + "%");
      el.style.setProperty("--dhx-l-primary", l + "%");
    });

    // return () => colorpicker.destructor();
    return () => awaitRedraw().then(() => colorpicker?.destructor());
  }, []);

  return (
    <div
      ref={colorpicker_container}
      className="container dhx_widget--bordered dhx_layout_colorpicker_cell"
    />
  );
}
