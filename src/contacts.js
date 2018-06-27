import React, { Component } from 'react';
import { View, Text, Button, StyleSheet  } from 'react-native';
import { Contacts, Permissions } from 'expo';

/**
 * ? ExpoKit Contacts API only support read, this is a feature request to support adding contact.
 * ? If you use a adding or delete contact, 
 * ? you need a library react-native-contacts and eject project with yarn run eject for work with android studio
 */

class ContactsComponent extends Component {

    state = {
        myContacts: [],
    }

    _getContacts = async () => {
        // * Ask for permission to query contacts.
        const permission = await Permissions.askAsync(Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied
            return;
        }

        const contacts = await Contacts.getContactsAsync({
            fields: [
                Contacts.PHONE_NUMBERS,
                Contacts.EMAILS,
            ],
            pageSize: 10,
            pageOffset: 0,
        });

        // console.log(contacts.data);
        this.setState({
            myContacts: contacts.data,
        });
    }

  render() {
    return (
      <View style={{ width: '100%' }}>
        {
            this.state.myContacts.map((contact, i) => (
                <Text key={i}>{contact.name}</Text>
            ))
        }
        <Button 
            title='Load contacts'
            onPress={this._getContacts}
        />
      </View>
    );
  }
}

export default ContactsComponent;
