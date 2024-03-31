import { Button, MD2Colors, IconButton, Text, TextInput } from 'react-native-paper';
import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppSize from '../utils/AppSize';
import AppStyles from '../utils/AppStyles';
import AppColors from '../utils/AppColors';
import { getUsers, updateUser } from '../network/api';
import { IUserDetail } from '../types/Types';
import { ScrollView } from 'react-native-gesture-handler';
import RNHTMLtoPDF from 'react-native-html-to-pdf';


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


function Report({ navigation, route }: any): JSX.Element {
  const [userDetail, setUserDetail] = React.useState<IUserDetail>();
  useEffect(() => {

    getUsers(route?.param?.email).then(response => {
      console.log(response?.data, "detail");
      setUserDetail(response?.data[0])
    })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, [])

  // const generateReport=async ()=>{
  //   try{
  //       let options = {
  //           html: `<h2 style="text-align:center">Profile</h2><h1 style="text-align:center">Name: ${userDetail?.firstName} ${userDetail?.lastName}</h1><p>Email :  ${userDetail?.email}</p>
  //           <p>Degree :  ${userDetail?.degree}</p><p>Phone :  ${userDetail?.phoneNumber}</p><p>Location :  ${userDetail?.location}</p>`,
  //           fileName: 'test3',
  //           directory: 'Download',
  //         };

  //         let file = await RNHTMLtoPDF.convert(options)
  //          console.log(file.filePath);
  //         //alert(file.filePath);
  //   }
  //   catch(e:any){

  //   }



  // }

  return (
    <SafeAreaView style={iStyles.surface}>
      <ScrollView>
        <Text style={iStyles.header}>My Profile</Text>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>Name</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.firstName + ` ` + userDetail?.lastName}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>Email</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>Degree</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.degree}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>Location</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.location}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>DOB</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.dob}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: AppSize.vs(8) }}>
          <Text style={iStyles.header}>Phone Number</Text>
          <Text style={iStyles.header}>{` : `}</Text>
          <Text style={iStyles.header}>{userDetail?.phoneNumber}</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

export default Report;
