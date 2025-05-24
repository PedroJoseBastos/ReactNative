import { Button, Image, Text, View , TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View className="">
       <Text className=" bg-blue-700 text-white p-4 font-bold "> Detalhes do Produto </Text>
      <Image
        className="w-full h-full p-4 " 
        source={{ uri: "https://i.zst.com.br/thumbs/12/b/16/1947545825.jpg" }}
      /> 
  
      <Text className="text-3xl ml-4 mr-4 text-dark-100 font-bold">Produto Excepcional</Text>
      <Text className="text-1xl ml-4 mr-4">Este produto espetaculoso 100% algodão egipicio corte slim fit , entrega elegancia e conforto aproveite nossas ultimas peças disponiveis</Text>
      <Text className="text-2xl ml-4 mr-4 text-green-500 font-bold">R$ 300,00</Text>
      
      <TouchableOpacity className="rounded-full bg-blue-500 ml-4 mr-4 p-4 mt-4 items-center " >
            <Text className="text-white text-1xl" >Comprar Agora </Text>
      </TouchableOpacity>
      
    
    </View>
  );
}
