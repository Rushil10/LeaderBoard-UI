import * as React from 'react';
import { View, Text,Image } from 'react-native';
import styles from '../Tabs/styles'

function RankCard(props) {
    return (
      <View style={styles.card}>
        <View style={styles.rankDisplay}>
            <Text style={styles.makeBold}>{props.data.rank}</Text>
        </View>
        <View elevation={11} style={styles.otherRanks}>
            <View style={styles.otherImage}>
                <Image source={{uri:props.data.image}} style={styles.otherRankImage} />
            </View>
            <View style={styles.otherData}>
                <View>
                    <Text style={styles.othername}>{props.data.name}</Text>
                </View>
                <View>
                    <Text style={styles.otherusername}>{props.data.username}</Text>
                </View>
            </View>
            <View style={styles.otherRank}>
                <Text style={styles.disRank}>{props.data.count}</Text>
            </View>
        </View>
      </View>
    );
}

export default RankCard;