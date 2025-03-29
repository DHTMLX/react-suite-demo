import { useEffect, useRef, useState } from "react";
import { Grid, Pagination } from "@dhx/trial-suite";
import store from "../../data";

export default function GridComponent() {
  let [grid, setGrid] = useState(null);
  const gNode = useRef(null);
  const pNode = useRef(null);

  useEffect(() => {
    const gridConfig = {
      autoWidth: true,
      columns: [
        {
          gravity: 2,
          id: "time",
          header: [{ text: "Time", align: "center" }],
          type: "date",
          dateFormat: "%M %d, %H:%i",
        },
        { id: "nights", header: [{ text: "Nights" }] },
        {
          id: "price",
          gravity: 1,
          header: [{ text: "Price" }],
          type: "number",
          numberMask: {
            prefix: "$",
          },
        },
        {
          gravity: 3,
          id: "contactPerson",
          header: [{ text: "Contact Person" }],
        },
        {
          gravity: 4,
          id: "contactEmail",
          header: [{ text: "Contact Email" }],
          htmlEnable: true,
          template: (text) => {
            return `<span class="contact_email";>${text}</span>`;
          },
        },
        {
          gravity: 2,
          id: "totalCost",
          header: [{ text: "Total Cost" }],
          type: "number",
          numberMask: {
            prefix: "$",
          },
        },
      ],
      css: "grid",
      multiselection: true,
      selection: "complex",
      editable: true,
    };

    const grid = new Grid(gNode.current, gridConfig);
    const paginator = new Pagination(pNode.current, {
      pageSize: 20,
      data: grid.data,
    });
    // Initialize grid and paginator here
    setGrid(grid);

    // Cleanup
    return () => {
      grid?.destructor();
      paginator?.destructor();
    };
  }, []);

  useEffect(() => {
    grid?.data.parse(store.gridDataset);
  }, [grid]);

  return (
    <div className="flex-cols dhx_widget--bordered">
      <div ref={gNode} className="grid_container"></div>
      <div ref={pNode}></div>
    </div>
  );
}
