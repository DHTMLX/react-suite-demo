import ButtonsFormComponent from "./ButtonsForm";
import ChartComponent from "./Chart";
import ColorpickerComponent from "./Colorpicker";
import FormComponent from "./Form";
import MessageDataviewComponent from "./MessageDataview";

export default function RightContentComponent() {
  return (
    <div className="flex-cols grow col-wrap content_right">
      <ChartComponent />
      <FormComponent />
      <ButtonsFormComponent />
      <ColorpickerComponent />
      <MessageDataviewComponent />
    </div>
  );
}
