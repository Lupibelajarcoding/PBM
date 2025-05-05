import React from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function ChatScreen({ navigation }) {
  const chatData = Array.from({ length: 20 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Driver ${i + 1}`,
    message: `Pesan terakhir dari Driver ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('ChatRoom', { chat: item })}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatTextContainer}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.chatContainer}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatMessage: {
    color: '#555',
    marginTop: 4,
  },
});
