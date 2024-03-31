import { Button, MD2Colors, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppSize from '../utils/AppSize';
import AppStyles from '../utils/AppStyles';
import AppColors from '../utils/AppColors';
import { createUser } from '../network/api';

const iStyles = StyleSheet.create({
  surface: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: MD2Colors.green50,
  },
  loginBtn: { marginTop: AppSize.vs(25), alignItems: 'center' },
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
    marginBottom: AppSize.vs(60),
  },
});


function Login({navigation}:any): JSX.Element {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const createNeWUser = () => {
    try{
      createUser(email, password).then(response => {
        console.log(response?.data);
        navigation.navigate("Home", { email: response?.data?.email })
       
      })
    }catch(e:any){

    }
  }

  return (
    <SafeAreaView style={iStyles.surface}>
      <Text style={iStyles.header}>My Profile</Text>
      <View style={AppStyles.marginHorizontal25}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          activeOutlineColor={AppColors.JapaneseLaurel}
          placeholder="Enter your email"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={AppStyles.marginTop25}
          activeOutlineColor={AppColors.JapaneseLaurel}
          mode="outlined"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={iStyles.loginBtn}>
          <Button
            buttonColor={AppColors.JapaneseLaurel}
            mode="contained"
            onPress={() => { createNeWUser() }}>
            Login
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;
