import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useRouter} from "expo-router";
import {selectIsAuthenticated} from "@/store/user/user.selectors";
import {useEffect, useState} from "react";
import {authenticateUser} from "@/store/user/user.effects";
import {Text, View} from "tamagui";

export default function OnboardingScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    /** STORE **/
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    /** STATE **/
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/home");
            setIsLoading(false);
            return;
        }
    }, [isAuthenticated, router]);

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            setIsLoading(true);
            dispatch(
                authenticateUser({})
            );
        }
    }, [isLoading, isAuthenticated, dispatch]);

    return (
        <View flex={1} justifyContent={"center"} alignItems={"center"}>
            <Text>Loading</Text>
        </View>
    );
}