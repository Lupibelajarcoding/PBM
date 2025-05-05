import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function OrderScreen({ route }) {
  const { resto } = route.params;
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
        setName('');
        setNotes('');
        setPaymentMethod('cod');
        setQuantity(1);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pesan dari {resto.name}</Text>
      <Text style={styles.subtitle}>Estimasi waktu: {resto.time}</Text>

      <Text style={styles.label}>Nama Pemesan</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Catatan Tambahan</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Contoh: tidak pedas, pakai sendok"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <Text style={styles.label}>Jumlah Pesanan: {quantity}</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={1}
        maximumValue={50}
        step={1}
        value={quantity}
        onValueChange={(val) => setQuantity(val)}
        minimumTrackTintColor="#ff6347"
        maximumTrackTintColor="#ccc"
        thumbTintColor="#ff6347"
      />

      <Text style={styles.label}>Metode Pembayaran</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={paymentMethod}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Bayar di tempat (COD)" value="cod" />
          <Picker.Item label="Transfer Bank" value="bank" />
          <Picker.Item label="E-Wallet (OVO, GoPay, dll)" value="ewallet" />
        </Picker>
      </View>

      <Button title="Pesan Sekarang" onPress={handleOrder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    marginBottom: 16,
    color: 'gray',
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: 4,
    marginBottom: 4,
  },
});
