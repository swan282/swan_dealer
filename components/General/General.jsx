import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import React from 'react';

export default function General() {
  const handleLogOut = async () => {
    alert('Log Out Successful');
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>General</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <Icon.MapPin style={styles.icon} stroke="black" />
          <Text style={styles.rowText}>Your Shop Location</Text>
          <Icon.ArrowRightCircle style={styles.arrowIcon} stroke="black" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Icon.Package style={styles.icon} stroke="black" />
          <Text style={styles.rowText}>My Orders</Text>
          <Icon.ArrowRightCircle style={styles.arrowIcon} stroke="black" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Icon.PieChart style={styles.icon} stroke="black" />
          <Text style={styles.rowText}>Total Sales</Text>
          <Icon.ArrowRightCircle style={styles.arrowIcon} stroke="black" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Icon.Info style={styles.icon} stroke="black" />
          <Text style={styles.rowText}>About Us</Text>
          <Icon.ArrowRightCircle style={styles.arrowIcon} stroke="black" />
        </View>
      </View>
      <View style={styles.signOutContainer} >
        <TouchableOpacity className="flex-row" onPress={handleLogOut}>
          <Icon.LogOut className="ml-6 mt-5" stroke="red" />
          <Text style={styles.rowText2} className="font-bold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    marginLeft: 9,
    marginTop: 6,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rowContainer: {
    marginLeft: 33,
    marginRight: 33,
    marginTop: 15,
    padding: 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    height: 280,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  icon: {
    marginLeft: 18,
  },
  rowText: {
    marginLeft: 16,
    fontSize: 16,
  },
  rowText2: {
    marginLeft: 16,
    marginTop: 21,
    fontSize: 16,
    color: 'red',
  },
  arrowIcon: {
    marginLeft: 'auto', // Pushes the icon to the far right
    marginRight: 18,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10
  },
  signOutContainer: {
    marginLeft: 33,
    marginRight: 33,
    marginTop: 20,
    padding: 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    height: 70,
  }
});
