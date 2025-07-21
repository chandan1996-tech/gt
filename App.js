import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['Breakfast', 'Salad', 'Pizza', 'Pasta'];

const restaurants = [
  {
    name: 'Park Noodles',
    cuisine: 'Chinese, Fastfood',
    discount: '34% off in all item',
    rating: 4.6,
    time: '30-45 Mins',
    price: '₹40 for two',
    image: 'https://source.unsplash.com/400x300/?salad',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.deliveryText}>DELIVERY TO</Text>
        <Text style={styles.locationText}>United States ▼</Text>
        <TouchableOpacity>
          <Text style={styles.offers}>⚙️ Offers</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>50% OFF</Text>
        <Text style={styles.bannerSubText}>First Order</Text>
        <Image
          source={{ uri: 'https://source.unsplash.com/400x300/?pizza' }}
          style={styles.bannerImage}
        />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((item, index) => (
          <View key={index} style={styles.categoryBox}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Restaurants */}
      <View style={styles.restaurantsHeader}>
        <Text style={styles.sectionTitle}>All Restaurants Nearby</Text>
        <TouchableOpacity>
          <Text style={styles.filterText}>Sort/Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.discountLabel}>{item.discount}</Text>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSub}>{item.cuisine}</Text>
              <View style={styles.cardMeta}>
                <Text style={styles.cardRating}>⭐ {item.rating}</Text>
                <Text style={styles.cardTime}>{item.time}</Text>
              </View>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>🏠 Home</Text>
        <Text style={styles.navItem}>🔍 Search</Text>
        <Text style={styles.navItem}>🛒 Cart</Text>
        <Text style={styles.navItem}>📦 Orders</Text>
        <Text style={styles.navItem}>👤 Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  topBar: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  deliveryText: { fontSize: 12, color: '#888' },
  locationText: { fontSize: 16, fontWeight: 'bold', color: 'red' },
  offers: { fontSize: 14, color: '#444' },

  banner: { backgroundColor: '#FF6F61', margin: 16, borderRadius: 12, padding: 16 },
  bannerText: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  bannerSubText: { color: '#fff', fontSize: 16, marginBottom: 8 },
  bannerImage: { height: 100, borderRadius: 8 },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginHorizontal: 16, marginTop: 16 },
  categories: { paddingHorizontal: 16, marginTop: 8 },
  categoryBox: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: { fontSize: 14 },

  restaurantsHeader: {
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterText: { color: 'blue' },

  card: {
    margin: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: { height: 180, width: '100%' },
  discountLabel: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
  },
  cardInfo: { padding: 12 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#777', marginVertical: 4 },
  cardMeta: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  cardRating: { color: '#444' },
  cardTime: { color: '#444' },
  cardPrice: { color: '#888' },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: { fontSize: 12 },
});
