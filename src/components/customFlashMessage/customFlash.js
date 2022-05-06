import { showMessage } from "react-native-flash-message";

const errorConfig = {
  type: "danger",
  message: "Error",
  icon: "auto",
  description: "",
  duration: 2500,
  autoHide: true,
};

const successConfig = {
  ...errorConfig,
  type: "success",
  message: "success",
};



export const customFlash = (type, stateMessage) => {
    console.log(type);
  return showMessage(
    type === "error"
      ? { ...errorConfig, description: stateMessage }
      : { ...successConfig, description: stateMessage }
  );
};
