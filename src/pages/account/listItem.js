import React from 'react'
import { StyleSheet, Text, View, NativeModules } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleRight, faArrowRight, faCog, faComment, faDoorOpen, faEdit, faNewspaper, faRegistered, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { logout } from '../../helpers/asyncstorage'
import { useNavigation } from '@react-navigation/native'
const ListItemAuth = () => {
    const navigation = useNavigation()
    const handleLogout = async () => {
        logout(() => {
            navigation.navigate('MainApp', { screen: 'Home' })
        });
    }
    return (
        <View>

            <ListItem bottomDivider>
                <FontAwesomeIcon icon={faComment} />
                <ListItem.Content>
                    <ListItem.Title>Chatan</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('MyPost')}>
                <FontAwesomeIcon icon={faNewspaper} />
                <ListItem.Content>
                    <ListItem.Title>Postingan Ku</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('RegistrationMemberList')}>
                <FontAwesomeIcon icon={faUserPlus} />
                <ListItem.Content>
                    <ListItem.Title>Pendaftaran Anggota</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('Settings')}>
                <FontAwesomeIcon icon={faEdit} />
                <ListItem.Content>
                    <ListItem.Title>Ubah Profil</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={handleLogout}>
                <FontAwesomeIcon icon={faDoorOpen} />
                <ListItem.Content>
                    <ListItem.Title>Keluar</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
        </View>
    )
}

export default ListItemAuth

const styles = StyleSheet.create({})
