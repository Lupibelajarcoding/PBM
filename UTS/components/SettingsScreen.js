import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default function SettingsScreen() {
    return (
        <ScrollView style={styles.settingsContainer}>
            <View style={styles.settingsItem}>
                <Icon name={'notifications-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Notifikasi</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'pricetag-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Promo</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'archive-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Alamat Favorit</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'people-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Ajak Teman</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'language-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Bahasa</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'accessibility-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Aksesibilitas</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'help-circle-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Pusat Bantuan</Text>
            </View>
            <Text style={styles.settingsSubTitle}>Info Lainnya</Text>
            <View style={styles.settingsItem}>
                <Icon name={'lock-closed-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Kebijakan Privasi</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'reader-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Ketentuan Layanan</Text>
            </View>
            <View style={styles.settingsItem}>
                <Icon name={'star-outline'} size={20} color="gray" />
                <Text style={styles.settingsText}>Beri Rating</Text>
            </View>
        </ScrollView>
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
    settingsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
    },
    settingsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    settingsSubTitle: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4,
        marginBottom: 4,
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    settingsText: {
        fontSize: 18,
        color: '#333',
    },

});