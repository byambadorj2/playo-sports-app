import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text style={{marginLeft: 15}}>Dasarahalli</Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginRight: 15,
          }}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />

          <Pressable>
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://lh3.google.com/u/0/ogw/AF2bZyg4dp6w3ZzQ368rxz-rSBAxlmFeROGn3WmraY-khaQp8g=s64-c-mo',
              }}
            />
          </Pressable>
        </View>
      ),
    });
  });
  const data = [
    {
      id: '10',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
      text: 'Learn Tennis',
      description: 'Know more',
    },
    {
      id: '11',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
      text: 'Up Your Game',
      description: 'Find a coach',
    },
    {
      id: '12',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_03.png',
      text: 'Hacks to win',
      description: 'Yes, Please!',
    },
    {
      id: '13',
      image:
        'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_02.png',
      text: 'Spotify Playolist',
      description: 'Show more',
    },
  ];

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'F8F8F8'}}>
      <View
        style={{
          padding: 13,
          backgroundColor: 'white',
          margin: 15,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.25,
          shadowRadius: 2,
        }}>
        <View>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 25,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
            }}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Set Your Weekly Fit Goal{' '}
            </Text>
            <Image
              style={{width: 20, height: 20, borderRadius: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/426/426833.png',
              }}
            />
          </View>

          <Text style={{marginTop: 8, color: 'gray'}}>KEEP YOURSELF FIT!</Text>
        </View>
      </View>
      <View
        style={{
          padding: 13,
          backgroundColor: 'white',
          marginVertical: 6,
          marginHorizontal: 13,
          borderRadius: 12,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 6,
            backgroundColor: '#E0E0E0',
            borderRadius: 4,
            width: 200,
            marginVertical: 4,
          }}>
          <Text style={{color: '#484848', fontSize: 13}}>
            GEAR UP FOR YOUR GAME
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>Badminton Activity</Text>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 7,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              width: 80,
            }}>
            <Text style={{textAlign: 'center'}}>View</Text>
          </Pressable>
        </View>
        <Text style={{color: 'gray', marginTop: 4}}>
          You have no Games Today
        </Text>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            View My Calendar
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          padding: 13,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
        <Pressable style={{flex: 1}}>
          <View style={{borderRadius: 10}}>
            <Image
              style={{width: 180, height: 140, borderRadius: 12}}
              source={{
                uri: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Play</Text>
              <Text style={{fontSize: 15, color: 'gray', marginTop: 7}}>
                Find Players and join their activities
              </Text>
            </View>
          </Pressable>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View style={{borderRadius: 10}}>
            <Image
              style={{width: 180, height: 140, borderRadius: 12}}
              source={{
                uri: 'https://images.pexels.com/photos/3660204/pexels-photo-3660204.jpeg?auto=compress&cs=tinysrgb&w=800',
              }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: '500'}}>Book</Text>
              <Text style={{fontSize: 15, color: 'gray', marginTop: 7}}>
                Book your slots in venues nearby
              </Text>
            </View>
          </Pressable>
        </Pressable>
      </View>
      <View style={{padding: 13}}>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#29AB87',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="addusergroup" size={24} color="green" />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Groups</Text>

            <Text style={{marginTop: 10, color: 'gray'}}>
              Connect,Compete and Discuss
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10,
            marginTop: 15,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'yellow',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="tennisball-outline" size={24} color="black" />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Game Time Activites</Text>

            <Text style={{marginTop: 10, color: 'gray'}}>
              355 Playo hosted games
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 13}}>
        <View style={{padding: 10, backgroundColor: 'white', borderRadius: 10}}>
          <Text style={{fontSize: 15, fontWeight: '500'}}>Spotlight</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data?.map((item, index) => (
              <ImageBackground
                imageStyle={{borderRadius: 10}}
                style={{
                  width: 220,
                  height: 280,
                  resizeMode: 'contain',
                  marginRight: 10,
                  marginVertical: 15,
                }}
                source={{uri: item?.image}}></ImageBackground>
            ))}
          </ScrollView>
        </View>
      </View>

      <View>
        <View style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <Image
            style={{width: 120, height: 70, resizeMode: 'contain'}}
            source={{
              uri: 'https://playo-website.gumlet.io/playo-website-v2/logos-icons/new-logo-playo.png?q=50',
            }}
          />
        </View>
        <Text style={{color: 'gray', textAlign: 'center'}}>
          Your Sports community app
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
