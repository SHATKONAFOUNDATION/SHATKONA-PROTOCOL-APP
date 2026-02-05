import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AppDashboard() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>FASCIAMAX DASHBOARD</Text>
        <Text style={styles.subText}>Your Daily Rituals are active.</Text>
        {/* The rest of your Ritual cards will go here */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  scrollContent: { padding: 20, alignItems: 'center', paddingTop: 60 },
  title: { color: '#fbbf24', fontSize: 22, fontWeight: 'bold' },
  subText: { color: '#ffffff', marginTop: 10 }
});