import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Products = ({prodID}) => {
    return (
        <View>
            <Text className="text-center">{prodID}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Products;
