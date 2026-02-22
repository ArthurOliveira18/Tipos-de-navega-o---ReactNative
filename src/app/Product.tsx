import { View } from "react-native";
import { DrawerRoutesProps } from "@/Routes/DrawerRoutes";


import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { ButtonIcon } from "@/components/ButtonIcon";
import { StackRoutesProps } from "@/Routes/StackRoutes";




export function Product({ navigation, route }: DrawerRoutesProps<"product">) {



    return (

        <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
            <Header>
                <ButtonIcon name="menu" onPress={() => navigation.toggleDrawer()} />
               

                <Title>Product {route.params?.id}</Title>
                
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()} />

            </Header>
        </View>

    )


}