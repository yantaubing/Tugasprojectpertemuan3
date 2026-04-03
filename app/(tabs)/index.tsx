import { View, Text, StyleSheet, Pressable, Image, SafeAreaView, useWindowDimensions, } from 'react-native';

export default function App() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seles chengyunku</Text>
      </View>

      {/* GRID */}
      <View style={styles.gridContainer}>
        {/* ROW 1 */}
        <View style={styles.row}>
          <Pressable
            style={[
              styles.box,
              isLandscape && styles.boxLandscape,
              { backgroundColor: '#27ae60' },
            ]}
          >
            <Image
              source={require('../../assets/images/denyun.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Boarini Milanesi</Text>
            <Text style={styles.subText}>$ 7juta</Text>
          </Pressable>

          <Pressable
            style={[
              styles.box,
              isLandscape && styles.boxLandscape,
              { backgroundColor: '#2980b9' },
            ]}
          >
            {/* BADGE OFF */}
            <View style={styles.badge}>
              <Text style={styles.badgeText}>OFF</Text>
            </View>

            <Image
              source={require('../../assets/images/fengyui.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>iPhone 17 Pro Max</Text>
            <Text style={styles.subText}>$ 1.99juta</Text>
          </Pressable>
        </View>

        {/* ROW 2 */}
        <View style={styles.row}>
          <Pressable
            style={[
              styles.box,
              isLandscape && styles.boxLandscape,
              { backgroundColor: '#f39c12' },
            ]}
          >
            <Image
              source={require('../../assets/images/guiyun.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Victorine Wallet</Text>
            <Text style={styles.subText}>$ 2.5juta</Text>
          </Pressable>

          <Pressable
            style={[
              styles.box,
              isLandscape && styles.boxLandscape,
              { backgroundColor: '#8e44ad' },
            ]}
          >
            <Image
              source={require('../../assets/images/junken.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Changhong 65 Inch</Text>
            <Text style={styles.subText}>$ 89juta</Text>
          </Pressable>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>POS System shop online</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // sesuai soal
    backgroundColor: 'rgb(61, 122, 183)',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },

  gridContainer: {
    flex: 3,
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },

  box: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  boxLandscape: {
    aspectRatio: undefined,
    height: 140,
  },

  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  subText: {
    fontSize: 14,
    color: '#ecf0f1',
    marginTop: 5,
  },

  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e',
  },

  footerText: {
    color: '#ecf0f1',
  },

  // BADGE
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});