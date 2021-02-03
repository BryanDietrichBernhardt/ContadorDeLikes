import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Photo = ({ file, count }) => {
  const [likes, setLike] = useState(count);

    var increment = () => {
      setLike(likes + 1);
    }

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={file} />
      <TouchableOpacity onPress={increment}>
        <Text>{likes} Likes</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default Photo;