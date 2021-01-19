import * as React from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles'
import data from '../data'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RankCard from '../components/RankCard'

function Today() {
    return (
      <View>
          <View elevation={9} style={styles.row}>
              <View style={styles.rankCols}>
                  <Text style={styles.rank}>2</Text>
                  <Image source={{uri:'https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg'}} style={styles.rankImage} />
                  <Text style={styles.makeBold}>Dumrep</Text>
                  <Text style={styles.rankOneUsername}>@dum_rep</Text>
                  <Text style={styles.makeBold}>245</Text>
              </View>
              <View style={styles.rankCols}>
                  <Image source={{uri:'https://wallpaperaccess.com/full/2213424.jpg'}} style={styles.rankOneImage} />
                  <Text style={styles.rankOneText}>Sampri Vimatski</Text>
                  <Text style={styles.rankOneUsername}>@samp_vini</Text>
                  <Text style={styles.makeBold}>255</Text>
              </View>
              <View style={styles.rankCols}>
              <Text style={styles.rank}>3</Text>
                  <Image source={{uri:'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=6&m=1007763808&s=612x612&w=0&h=Js1VDBulbaNw_CF7fghP_nhUPCC-DQTqb7Wym1CdTOI='}} style={styles.rankImage} />
                  <Text style={styles.makeBold}>Alpinik</Text>
                  <Text style={styles.rankOneUsername}>@aplliol</Text>
                  <Text style={styles.makeBold}>215</Text>
              </View>
          </View>
          <ScrollView style={styles.list}>
              <FlatList
              keyExtractor={(item,index) => index.toString()}
              data={Object.assign(data)}
              renderItem={data => <RankCard data={data.item} />}
              />
          </ScrollView>
      </View>
    );
}

export default Today;