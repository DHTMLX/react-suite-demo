import ButtonsForm from "./ButtonsForm";
import Chart from "./Chart";
import Colorpicker from "./Colorpicker";
import FormComponent from "./Form";
import MessageDataview from "./MessageDataview";

export default function RightContent() {
  return (
    <div className="flex-cols grow col-wrap content_right">
      <Chart />
      <FormComponent />
      <ButtonsForm />
      <Colorpicker />
      <MessageDataview />
    </div>
  );
}
