import {FirestoreKeys} from "@/constants/FirestoreKeys";
import {firestore} from "@/lib/firebase";
import {UserDto} from "@/models/dto/user.dto";
import {UserCreationParams} from "@/models/types/userCreationParams";
import {UserUpdateParams} from "@/models/types/userUpdateParams";
import {collection, deleteDoc, doc, getDoc, setDoc, updateDoc,} from "@firebase/firestore";

export async function getUserFromDB(id: string): Promise<UserDto | null> {
    try {
        const ref = doc(firestore, FirestoreKeys.USERS, id);
        const snap = await getDoc(ref);
        return snap.exists() ? (snap.data() as UserDto) : null;
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function createUserInDB(
    params: UserCreationParams
): Promise<UserDto> {
    try {
        const ref = collection(firestore, FirestoreKeys.USERS);
        const newDocRef = doc(ref);
        const userWithId: UserDto = {
            id: newDocRef.id,
            createdAt: new Date().toISOString(),
            isPremium: false,
        };
        await setDoc(newDocRef, userWithId);
        return userWithId;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function updateUserInDB(
    params: UserUpdateParams
): Promise<UserDto> {
    try {
        const ref = doc(firestore, FirestoreKeys.USERS, params.id);
        await updateDoc(ref, params.data);
        const updatedDoc = await getDoc(ref);
        return updatedDoc.data() as UserDto;
    } catch (e) {
        throw new Error(e as string);
    }
}

export async function deleteUserInDB(id: string): Promise<void> {
    try {
        const ref = doc(firestore, FirestoreKeys.USERS, id);
        await deleteDoc(ref);
    } catch (e) {
        throw new Error(e as string);
    }
}
