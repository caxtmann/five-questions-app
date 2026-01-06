import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {initializeAuthentication} from "@/store/user/user.effects";
import {selectIsAuthenticated, selectIsLoading} from "@/store/user/user.selectors";
import {Redirect} from "expo-router";
import {useEffect, useState} from "react";
import {Text, View} from "react-native";

export default function InitiatorScreen() {
    const dispatch = useAppDispatch();

    /** STORE **/
    const isLoading = useAppSelector(selectIsLoading);
    const isAuthenticated = useAppSelector(selectIsAuthenticated);

    /** STATE **/
    const [isFetchingContent, setIsFetchingContent] = useState<boolean>(false);

    /** EFFECTS **/
    useEffect(() => {
        if (isLoading && !isAuthenticated) {
            dispatch(initializeAuthentication());
        }
    }, [isLoading, isAuthenticated, dispatch]);

    useEffect(() => {
        if (!isFetchingContent) {
            setIsFetchingContent(true);
        }
    }, [isFetchingContent, dispatch])

    if (!isLoading && !isAuthenticated) {
        return <Redirect href={"/onboarding"}/>
    }

    if (!isLoading && isAuthenticated) {
        return <Redirect href={"/home"}/>
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading..</Text>
        </View>
    )
}