import { Button, MD2Colors, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppSize from '../utils/AppSize';
import AppStyles from '../utils/AppStyles';
import AppColors from '../utils/AppColors';
import { updateUser } from '../network/api';
import { IUserDetail } from '../types/Types';
import { ScrollView } from 'react-native-gesture-handler';

const iStyles = StyleSheet.create({
  surface: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: MD2Colors.green50,
  },
  loginBtn: { marginTop: AppSize.vs(25), alignItems: 'center', marginBottom: AppSize.vs(20) },
  iconBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: MD2Colors.orange50,
    alignItems: 'center',
    width: AppSize.hs(200),
    borderRadius: AppSize.hs(10),
    marginTop: AppSize.hs(10),
    borderColor: MD2Colors.orange800,
    borderWidth: AppSize.hs(1),
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: AppSize.vs(10),
    marginTop: AppSize.vs(30),
  },
});


function Home({ navigation,route }: any): JSX.Element {

  const [userDetail, setUserDetail] = React.useState<IUserDetail>();


  const handleUserDetails = (type: string, text: string) => {
    setUserDetail((prevState) => ({
      ...prevState,
      [type]: text
    }));
  }

  useEffect(()=>{
    if( route?.param?.email){
      handleUserDetails("email", route?.param?.email)
    }

  },[ route?.param?.email])


  const updateUserDetail = () => {
    try {
      updateUser(userDetail!!).then(response => {
        console.log(response);
        navigation.navigate("Report", { email: userDetail?.email })

      })
    } catch (e: any) {

    }
  }

  return (
    <SafeAreaView style={iStyles.surface}>
      <ScrollView>
        <Text style={iStyles.header}>My Profile</Text>
        <View style={AppStyles.marginHorizontal25}>
          <TextInput
            mode="outlined"
            label="Email"
            value={userDetail?.email}
            activeOutlineColor={AppColors.JapaneseLaurel}
            placeholder="Enter your email"
            onChangeText={text => handleUserDetails("email", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="FirstName"
            placeholder="Enter your firstName"
            value={userDetail?.firstName}
            onChangeText={text => handleUserDetails("firstName", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="LastName"
            placeholder="Enter your lastName"
            value={userDetail?.lastName}
            onChangeText={text => handleUserDetails("lastName", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="Phone Number"
            placeholder="Enter your phone number"
            value={userDetail?.phoneNumber}
            onChangeText={text => handleUserDetails("phoneNumber", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="DOB"
            placeholder="Enter your dob"
            value={userDetail?.dob}
            onChangeText={text => handleUserDetails("email", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="Location"
            placeholder="Enter your location"
            value={userDetail?.location}
            onChangeText={text => handleUserDetails("email", text)}
          />
          <TextInput
            style={AppStyles.marginTop25}
            activeOutlineColor={AppColors.JapaneseLaurel}
            mode="outlined"
            label="Degree"
            placeholder="Enter your degree"
            value={userDetail?.degree}
            onChangeText={text => handleUserDetails("degree", text)}
          />
          <View style={iStyles.loginBtn}>
            <Button
              buttonColor={AppColors.JapaneseLaurel}
              mode="contained"
              onPress={() => updateUserDetail()}>
              Save Details
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
