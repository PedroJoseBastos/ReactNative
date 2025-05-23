import { Button, Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      
      <Image
        className="w-32 h-32 rounded-full" 
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Zeca_Pagodinho.jpg" }}
      /> 
  
      <Text className="text-3xl text-dark-100 font-bold">Zeca Pagodinho</Text>
      <Text className="text-lg">Idade: 30 anos</Text>
      <Text className="text-lg">Localização: Rio de Janeiro</Text>
      
      <View className="mt-4">
        <Button title="Editar Perfil" onPress={() => {}} />
      </View>

    </View>
  );
}
