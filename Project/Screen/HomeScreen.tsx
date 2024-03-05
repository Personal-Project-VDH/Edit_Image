import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import ImagePicker from '@baronha/react-native-multiple-image-picker';
import PhotoEditor from '@baronha/react-native-photo-editor';

const {width, height} = Dimensions.get('window');
const stickers: any[] = [
  'https://cdn-icons-png.flaticon.com/512/5272/5272912.png',
  'https://cdn-icons-png.flaticon.com/512/5272/5272913.png',
  'https://cdn-icons-png.flaticon.com/512/5272/5272916.png',
  'https://cdn-icons-png.flaticon.com/512/6645/6645767.png ',
];
const HomeScreen = () => {
  const remoteURL =
    'file:///storage/emulated/0/Pictures/Messenger/Messenger_creation_105daf54-86a8-4822-b53e-eea30090b4d7.jpeg';

  const [photo, setPhoto] = useState<any>({uri: remoteURL});
  const [photoSave, setPhotoSave] = useState<any>({uri: ''});

  const openPicker = () => {
    ImagePicker.openPicker({singleSelectedMode: true})
      .then((result: any) => {
        console.log('result', result);
        setPhoto({uri: `file://${result.realPath}`});
      })
      .then(e => {
        // console.log('error');
      });
  };

  const onEdit = async () => {
    try {
      const path = await PhotoEditor.open({
        path: photo.uri,
        // path: photo.path,
        stickers,
      });
      setPhoto({uri: ''});
      setPhotoSave({uri: `${path}`});
      console.log('resultEdit', path);
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onEdit}>
        {photo.uri === '' ? null : (
          <Image
            resizeMode="stretch"
            style={style.image}
            source={{uri: photo.uri}}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={style.openPicker} onPress={openPicker}>
        <Text style={style.titleOpen}>Open Picker</Text>
      </TouchableOpacity>

      {photoSave.uri === '' ? null : (
        <Image source={{uri: photoSave.uri}} style={style.img} />
      )}
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'space-evenly', alignItems: 'center'},
  image: {width: (width * 40) / 100, height: (height * 30) / 100},
  img: {width: (width * 40) / 100, height: (height * 30) / 100},
  openPicker: {
    margin: 12,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleOpen: {
    color: '#fff',
    fontWeight: 'bold',
    padding: 12,
  },
});
