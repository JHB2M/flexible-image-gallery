import React from 'react';
import {View, FlatList} from 'react-native';
import DATA from '../constants/DATA';
import {ImageItem} from '../components';
export default function App() {
  const [data, setData] = React.useState(DATA);

  const onPressImage = (item: any, index: number) => {
    const mappedList = DATA.map(x => {
      if (index + 1 == x.id) {
        if (x.isActive == false) {
          x.isActive = true;
        } else {
          x.isActive = false;
        }
      } else {
        x.isActive = false;
      }
      return x;
    });
    setData(mappedList);
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <ImageItem item={item} onPress={() => onPressImage(item, index)} />
  );

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}
