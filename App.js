import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
export default function App() {
  const tasks = [{name:"nome", id:1}, {name:"name", id:2}];
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList data={tasks} renderItem={({ item }) => 
        <View style={styles.infobox}>
          <Text>{item.name +" "+ item.id}</Text>
        </View>} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80 ,
    borderColor: "#00000",
    borderWidth: 2,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  infobox: {
    backgroundColor: "#FF0000",
    flex: 1,
    margin: 10,
  }
});
