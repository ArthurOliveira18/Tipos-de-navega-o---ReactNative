import { View } from "react-native";

import { StackRoutesProps } from "@/Routes/StackRoutes";
import { BottomRoutesProps } from "@/Routes/BottomRoutes";
import { DrawerRoutesProps } from "@/Routes/DrawerRoutes";

import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";



export function Home({ navigation }: DrawerRoutesProps<"home">) {



    return (

        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>

                <ButtonIcon name="menu"
                    onPress={() => navigation.toggleDrawer()} />


                <Title>Home</Title>

                <ButtonIcon name="add-circle"
                    onPress={() => navigation.navigate("product", { id: "7" })} />
            </Header>
        </View>

    )


}