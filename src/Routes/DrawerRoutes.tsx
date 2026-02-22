import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer"
import { MaterialIcons } from "@expo/vector-icons"

import { Product } from "@/app/Product"
import { Home } from "@/app/Home"

export type DraweRoutesList = {
    home: undefined,
    product: undefined | {id: string}
}

export type DrawerRoutesProps<T extends keyof DraweRoutesList> = DrawerScreenProps<DraweRoutesList, T>

const Drawer = createDrawerNavigator<DraweRoutesList>()

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName="home"

        // Aqui podemos definir o header que é padrão em todas as rotas ou em apenas uma rota, se for no Tab Navigator, vai ser em todas
        screenOptions={{
            drawerActiveTintColor: "#2c46b1",
            drawerInactiveTintColor: "#444444",
            headerShown: false, 
            
        }}
        >
            <Drawer.Screen
                name="home"
                component={Home}

                // Se for em apenas uma rota em especifíco como aqui, vai se aplicar somente nessa rota aqui mesmo
                options={{ 
                    headerTitle: "Inicio",
                    drawerLabel: "Inicio",
                    drawerIcon: ({color, size}) => <MaterialIcons name="home" color= {color}  size={size} />
                    
                }}
               
            />

            <Drawer.Screen
                name="product"
                component={Product}
                options={{ 
                   
                    drawerLabel: "Produto",
                    drawerIcon: ({color, size}) => <MaterialIcons name="home" color= {color}  size={size} />,
                    
                }}
            />

        </Drawer.Navigator>
    )


}