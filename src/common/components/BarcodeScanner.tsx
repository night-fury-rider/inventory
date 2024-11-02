import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, Modal} from 'react-native';
import {PermissionStatus, request, RESULTS} from 'react-native-permissions';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCodeScanner,
} from 'react-native-vision-camera';

type BarcodeScannerProps = {
  onScanSuccess: (data: string) => void;
};

const BarcodeScanner = ({onScanSuccess}: BarcodeScannerProps) => {
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isCameraActive, setCameraActive] = useState(true);
  const devices = useCameraDevices();
  const device = useCameraDevice('back');

  const requestCameraPermission = async () => {
    const status = await Camera.requestCameraPermission();
    if (status !== 'denied') {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const handleBarcodeScanned = (data: string) => {
    onScanSuccess(data);
  };

  const closeModal = () => {
    setModalVisible(false);
    setScannedData(null);
  };

  if (device == null) return <Text>Loading...</Text>;

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'upc-a'], // <-- ✅ We configure for 'upc-a' types
    onCodeScanned: codes => {
      for (const code of codes) {
        console.log(JSON.stringify(code.value)); // <-- ❌ On iOS, we receive 'ean-13'
        setCameraActive(false);
        handleBarcodeScanned(code.value || '');
      }
    },
  });

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={isCameraActive}
        codeScanner={codeScanner}
      />
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <Text>Scanned Data: {scannedData}</Text>
          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  camera: {
    height: 300,
    width: 300,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default BarcodeScanner;
