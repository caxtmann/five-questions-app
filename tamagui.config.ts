import {createTamagui} from "tamagui";
import {defaultConfig} from "@tamagui/config/v4";

export const tamaguiConfig = createTamagui({
    ...defaultConfig,
    settings: {
        ...defaultConfig.settings,
        onlyAllowShorthands: false,
    }
});

type Conf = typeof tamaguiConfig;

declare module "tamagui" {
    interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;