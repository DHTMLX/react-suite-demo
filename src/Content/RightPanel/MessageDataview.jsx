import { useEffect, useRef } from "react";
import { DataView } from "@dhx/trial-suite";
import store from "../../data";

export default function MessageDataview() {
  const node = useRef(null);

  function template({ mail, name, avatar, status, delivered }) {
    return `
        <div class="dhx_dataview_template_b grow">
            <div class="dhx_dataview_template_b__avatar" style="background-image: url(${avatar});">
                <div class="dhx_dataview_template_b__status dhx_dataview_template_b__status--${status}"></div>
            </div>
            <div class="dhx_dataview_template_b__title">Delivered ${delivered}</div>
            <div class="dhx_dataview_template_b__name">${name}</div>
            <a class="dhx_dataview_template_b__message" target="_blank" href="mailto:${mail}">
                <span class="dhx_dataview_template_b__message-icon mdi mdi-message-reply-text"></span>
                <span class="dhx_dataview_template_b__message-label">Message</span>
            </a>
        </div>
    `;
  }

  useEffect(() => {
    const dataview = new DataView(node.current, {
      template,
      itemsInRow: 2,
      css: "dhx_dataview_template_b_box",
    });

    dataview.data.parse(store.messageDataviewData);

    // Cleanup
    return () => dataview.destructor();
  }, []);

  return <div ref={node} />;
}
