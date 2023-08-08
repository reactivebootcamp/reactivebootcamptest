import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default function Products() {
    return (
        <View style={styles.container}>
            <Text>Products</Text>
        </View>
    )
}