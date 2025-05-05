import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.profileContainer}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>Ini Nama</Text>
      <Text style={styles.profileEmail}>iniemail@ymail.com</Text>
      <Text style={styles.profilePhone}>+62 812 3456 7890</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
      },
      profileImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 40,
      },
      profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      profileEmail: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
      },
      profilePhone: {
        fontSize: 18,
        color: '#555',
      },
      
});