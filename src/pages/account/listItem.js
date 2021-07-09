import React from 'react'
import { StyleSheet, Text, View, NativeModules } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleRight, faArrowRight, faCog, faComment, faDoorOpen, faNewspaper } from '@fortawesome/free-solid-svg-icons'
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

            <ListItem bottomDivider onPress={handleLogout}>
                <FontAwesomeIcon icon={faComment} />
                <ListItem.Content>
                    <ListItem.Title>Message</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={handleLogout}>
                <FontAwesomeIcon icon={faNewspaper} />
                <ListItem.Content>
                    <ListItem.Title>My Post</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={handleLogout}>
                <FontAwesomeIcon icon={faCog} />
                <ListItem.Content>
                    <ListItem.Title>Settings</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
            <ListItem bottomDivider onPress={handleLogout}>
                <FontAwesomeIcon icon={faDoorOpen} />
                <ListItem.Content>
                    <ListItem.Title>Logout</ListItem.Title>
                </ListItem.Content>
                <FontAwesomeIcon icon={faArrowCircleRight} />
            </ListItem>
        </View>
    )
}

export default ListItemAuth

const styles = StyleSheet.create({})
