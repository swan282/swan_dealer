import React from 'react'
import { styled } from 'nativewind';
import { View, Text, StyleSheet } from 'react-native'
import SIcon from "../../assets/stat_2.png";
import * as Icon from "react-native-feather";

const CardContainer = styled(View);
const CardTitle = styled(Text);
const CardContent = styled(Text);

export default function Card({index, data}) {
    const backgroundColor = data.status === "In Process" ? "#ffff" : "#522258";
    return (
        <CardContainer style={[styles.card, { backgroundColor,borderColor: '#522258', borderWidth:1 }]} >
            <CardTitle className="text-2xl font-bold text-black">Ordered By: {data.orderBy}</CardTitle>
            <CardContent className="text-xl font-bold text-black">Status: {data.status}</CardContent>
            <CardContent className="text-base text-gray-600 text-black">Product Name: {data.name}</CardContent>
            <CardContent className="text-sm text-black">Price: {data.price},  Quantity: {data.quantity}</CardContent>
        </CardContainer>
    )
}
const styles = StyleSheet.create({
    card: {
      width: 350,
      marginBottom: 6,
      padding: 20,
      marginTop: 20,
      marginLeft: 10,
      borderRadius: 10,
      borderColor: '#522258',
      shadowColor: '#021526',
      shadowOffset: { width: 1, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  });