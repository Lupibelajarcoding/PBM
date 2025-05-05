import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const promoBanner = {
    title: 'Diskon makanan 60%',
    subtitle: 'Tanpa min. pembelian. Maks. diskon 20rb',
    expired: 'Hangus 4 Mei 2025',
};

const restaurants = [
    {
        name: "McDonald's, Ahmad Yani Banyuwangi",
        rating: 4.9,
        distance: '3.40 km',
        time: '25-35 min',
        image: require('../assets/MCD.png'),
    },
    {
        name: 'Nasi Kulit Favorit, Banyuwangi',
        rating: 4.8,
        distance: '2.55 km',
        time: '30-40 min',
        image: require('../assets/Nasi-Kulit.jpeg'),
    },
    {
        name: 'AFC - Ali Fried Chicken, Kertosari',
        rating: 4.7,
        distance: '3.56 km',
        time: '20-30 min',
        image: require('../assets/AFC.jpeg'),
    },
];

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchBox}>
                <Icon name="search" size={20} color="#aaa" />
                <TextInput placeholder="Lagi mau mamam apa?" style={styles.searchInput} />
                <Icon name="restaurant-outline" size={20} color="red" />
            </View>

            <View style={styles.promoBox}>
                <Text style={styles.sectionTitle}>Promo buat kamu</Text>
                <View style={styles.promoCard}>
                    <Text style={styles.promoTitle}>{promoBanner.title}</Text>
                    <Text>{promoBanner.subtitle}</Text>
                    <Text style={styles.expiredText}>{promoBanner.expired}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.sectionTitle}>Rekomendasi resto di areamu</Text>
                {restaurants.map((resto, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.restoCard}
                        onPress={() => navigation.navigate("Order", { resto })}
                    >
                        <Image source={resto.image} style={styles.restoImage} />
                        <View style={styles.restoInfo}>
                            <Text style={styles.restoName}>{resto.name}</Text>
                            <Text style={styles.restoDetails}>
                                ⭐ {resto.rating} • {resto.time} • {resto.distance}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginVertical: 12,
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    promoBox: {
        marginBottom: 16,
    },
    promoCard: {
        backgroundColor: '#fdecea',
        borderRadius: 8,
        padding: 12,
        marginTop: 8,
    },
    promoTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
    },
    expiredText: {
        marginTop: 4,
        color: 'gray',
        fontSize: 12,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 8,
    },
    restoCard: {
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    restoImage: {
        width: '100%',
        height: 160,
    },
    restoInfo: {
        padding: 8,
    },
    restoName: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    restoDetails: {
        color: '#555',
        marginTop: 4,
    },
});
