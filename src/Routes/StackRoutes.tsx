import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"

import { Product } from "@/app/Product"
import { Home } from "@/app/Home"

export type StackRouteList = {
    home: undefined,
    product: undefined | {id: string}
}

export type StackRoutesProps<T extends keyof StackRouteList> = NativeStackScreenProps<StackRouteList, T>

const Stack = createNativeStackNavigator<StackRouteList>()

export function StackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="home"

        // Aqui podemos definir o header que é padrão em todas as rotas ou em apenas uma rota, se for no Stack Navigator, vai ser em todas
        // screenOptions={{headerShown: false}}
        >
            <Stack.Screen
                name="home"
                component={Home}

                // Se for em apenas uma rota em especifíco como aqui, vai se aplicar somente nessa rota aqui mesmo
                options={{ headerTitle: "Inicio" }}
            />

            <Stack.Screen
                name="product"
                component={Product}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )


}