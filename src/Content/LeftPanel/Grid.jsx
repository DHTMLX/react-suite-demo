import { useEffect, useRef } from "react";
import { Grid, Pagination } from "@dhx/trial-suite";
import { getData } from "../../data";

export default function GridComponent() {
  const { gridData } = getData();
  const grid_container = useRef(null);
  const pagination_container = useRef(null);

  useEffect(() => {
    const gridConfig = {
      data: gridData,
      autoWidth: true,
      columns: [
        {
          gravity: 2,
          id: "time",
          header: [{ text: "Time", align: "center" }],
          type: "date",
          dateFormat: "%M %d, %H:%i"
        },
        { id: "nights", header: [{ text: "Nights" }] },
        {
          id: "price",
          gravity: 1,
          header: [{ text: "Price" }],
          type: "number",
          numberMask: {
            prefix: "$"
          }
        },
        {
          gravity: 3,
          id: "contactPerson",
          header: [{ text: "Contact Person" }]
        },
        {
          gravity: 4,
          id: "contactEmail",
          header: [{ text: "Contact Email" }],
          htmlEnable: true,
          template: (text) => {
            return `<span class="contact_email";>${text}</span>`;
          }
        },
        {
          gravity: 2,
          id: "totalCost",
          header: [{ text: "Total Cost" }],
          type: "number",
          numberMask: {
            prefix: "$"
          }
        }
      ],
      css: 'grid',
      multiselection: true,
      selection: "complex",
      editable: true
    };

    const grid = new Grid(grid_container.current, gridConfig);
    const pagination = new Pagination(pagination_container.current, {
      pageSize: 20,
      data: grid.data
    });

    return () => {
      grid?.destructor();
      pagination?.destructor();
    };
  }, []);

  return (
    <div className="grid_container-wrapper">
      <div ref={grid_container} className="grid_widget"></div>
      <div ref={pagination_container}></div>
    </div>
  );
}
