import { useEffect, useRef } from "react";
import { Form } from "@dhx/trial-suite";

export default function FormComponent() {
  const node = useRef(null);

  const country = [
    {
      id: "austria",
      value: "Austria",
      src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/at.png",
    },
    {
      value: "Belarus",
      src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/by.png",
    },
    {
      value: "Belgium",
      src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/be.png",
    },
    {
      value: "Bulgaria",
      src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/bg.png",
    },
    {
      value: "Cyprus",
      src: "https://snippet.dhtmlx.com/codebase/data/combobox/01/img/cy.png",
    },
    // ... add more countries here
  ];

  useEffect(() => {
    const form = new Form(node.current, {
      padding: 40,
      width: "auto",
      rows: [
        {
          cols: [
            {
              width: "48%",
              name: "name",
              type: "input",
              label: "Name",
              placeholder: "Type text",
              required: true,
            },
            {
              type: "spacer",
            },
            {
              width: "48%",
              name: "surname",
              type: "input",
              label: "Surname",
              placeholder: "Type text",
              required: true,
            },
          ],
        },
        {
          name: "country",
          type: "combo",
          label: "Country",
          placeholder: "Click to select",
          multiselection: true,
          value: ["austria", "estonia"],
          data: country,
        },
        {
          name: "birth",
          type: "datepicker",
          label: "Date of Birth",
          placeholder: "Type text",
          value: new Date(),
        },
        {
          name: "career",
          type: "input",
          label: "Career objective",
          placeholder: "Type text",
          helpMessage: " Help information",
        },
        {
          name: "motivation",
          type: "textarea",
          label: "Motivation",
          placeholder: "Type text here",
        },
        {
          name: "language",
          type: "radioGroup",
          label: "Language level",
          value: "1",
          options: {
            cols: [
              {
                type: "radioButton",
                text: "Elementary",
                value: "1",
              },
              {
                type: "radioButton",
                text: "Intermediate",
                value: "2",
              },
              {
                type: "radioButton",
                text: "Advanced",
                value: "2",
              },
            ],
          },
        },
        {
          name: "backgroundColor",
          type: "colorpicker",
          label: "Background color",
          placeholder: "Click to change",
        },
        {
          name: "offices",
          type: "combo",
          label: "Offices",
          placeholder: "You can select several offices",
          multiselection: true,
          data: country,
        },
        {
          name: "attachDocument",
          type: "simpleVault",
          label: "Attach document",
        },
        {
          name: "howToContact",
          type: "checkboxGroup",
          label: "How to contact you",
          options: {
            cols: [
              {
                id: "1",
                type: "checkbox",
                text: "Phone",
                checked: true,
              },
              {
                id: "2",
                type: "checkbox",
                text: "Mail",
              },
              {
                id: "3",
                type: "checkbox",
                text: "Messenger",
              },
              {
                id: "4",
                type: "checkbox",
                text: "Your option",
              },
            ],
          },
        },
      ],
    });

    // Parse the data into the form

    // Cleanup
    return () => form.destructor();
  }, []);

  return <div ref={node} className="bordered" />;
}
