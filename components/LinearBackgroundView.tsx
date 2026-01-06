import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren, ReactElement } from "react";

const LinearBackgroundView = (props: PropsWithChildren): ReactElement => {
  return (
    <LinearGradient colors={["#141416", "#141416"]} style={{ flex: 1 }}>
      {props.children}
    </LinearGradient>
  );
};

export default LinearBackgroundView;
