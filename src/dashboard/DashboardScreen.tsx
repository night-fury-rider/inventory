import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {Card, FAB, List, Surface, Text} from 'react-native-paper';

import EmptyScreen from '$common/components/EmptyScreen';
import {DASHBOARD} from '$common/constants/strings.constants';
import {useAppSelector} from '$common/redux/redux.hooks';
import {TItem} from '$dashboard/dashboard.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import BarcodeScanner from 'common/components/BarcodeScanner';
import React, {useState} from 'react';

const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'Description of Product 1',
    quantity: 5,
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'Description of Product 2',
    quantity: 10,
  },
];

// TODO: Use specific type instead of any
const DashboardScreen = ({navigation}: any) => {
  const [animation] = useState(new Animated.Value(0));
  const items = useAppSelector(state => state.dashboard.filteredItems);
  const allItems = useAppSelector(state => state.dashboard.items);

  const [isScannerOpen, setScannerOpen] = useState(false);
  const [scanData, setScanData] = useState('');

  const renderItem = ({item}) => (
    <Surface style={styles.listItem}>
      <View style={styles.itemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </Surface>
  );

  const handleScanSuccess = (scanData: string) => {
    setScannerOpen(false);
    setScanData(scanData);
    console.log(`Scanned Data: ${JSON.stringify(scanData)}`);
  };

  const handleFabPress = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      {isScannerOpen ? (
        <BarcodeScanner onScanSuccess={handleScanSuccess} />
      ) : null}

      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.5],
                }),
              },
            ],
          }}>
          <FAB icon="plus" style={styles.fab} onPress={handleFabPress} />
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listItem: {
    marginVertical: 8,
    borderRadius: 8,
    elevation: 5, // Increased elevation for a stronger shadow
    backgroundColor: '#ffffff',
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0', // Light border for separation
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#777',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
  },
  fab: {
    backgroundColor: '#6200ee',
  },
});

export default DashboardScreen;
