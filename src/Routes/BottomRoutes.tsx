import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { MaterialIcons } from "@expo/vector-icons"

import { Product } from "@/app/Product"
import { Home } from "@/app/Home"

export type BottomRouteList = {
    home: undefined,
    product: undefined | {id: string}
}

export type BottomRoutesProps<T extends keyof BottomRouteList> = BottomTabScreenProps<BottomRouteList, T>

const Tab = createBottomTabNavigator<BottomRouteList>()

export function BottomRoutes() {
    return (
        <Tab.Navigator
            initialRouteName="home"

        // Aqui podemos definir o header que é padrão em todas as rotas ou em apenas uma rota, se for no Tab Navigator, vai ser em todas
        screenOptions={{
            tabBarActiveTintColor: "#2c46b1",
            tabBarInactiveTintColor: "#444444",
            tabBarLabelPosition: "beside-icon"
        }}
        >
            <Tab.Screen
                name="home"
                component={Home}

                // Se for em apenas uma rota em especifíco como aqui, vai se aplicar somente nessa rota aqui mesmo
                options={{ 
                    headerTitle: "Inicio",
                    tabBarLabel: "Produto",
                    tabBarIcon: ({color, size}) => <MaterialIcons name="home" color= {color}  size={size} />
                    
                }}
               
            />

            <Tab.Screen
                name="product"
                component={Product}
                options={{ 
                    headerShown: false, 
                    tabBarLabel: "Produto",
                    tabBarIcon: ({color, size}) => <MaterialIcons name="home" color= {color}  size={size} />
                }}
            />

        </Tab.Navigator>
    )


}