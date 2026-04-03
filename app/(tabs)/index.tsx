import { View, Text, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sales chenyunku</Text>
      </View>

      {/* GRID MENU */}
      <View style={styles.gridContainer}>
        <View style={styles.row}>
          <Pressable style={[styles.box, { backgroundColor: '#27ae60' }]}>
            <Image
              source={require('../../assets/images/denyun.png')}

              style={styles.icon}
            />
            <Text style={styles.boxText}> Boarini Milanesi</Text>
            <Text style={styles.subText}>$ 7juta </Text>
          </Pressable>

          <Pressable style={[styles.box, { backgroundColor: '#2980b9' }]}>
            <Image
              source={require('../../assets/images/fengyui.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>iphone 17promax</Text>
            <Text style={styles.subText}>$ 1.99juta</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable style={[styles.box, { backgroundColor: '#f39c12' }]}>
            <Image
              source={require('../../assets/images/guiyun.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}>Victorine Wallet</Text>
            <Text style={styles.subText}>$ 2.5juta</Text>
          </Pressable>

          <Pressable style={[styles.box, { backgroundColor: '#8e44ad' }]}>
            <Image
              source={require('../../assets/images/junken.png')}
              style={styles.icon}
            />
            <Text style={styles.boxText}> Changhong 65 Inch</Text>
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
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
});