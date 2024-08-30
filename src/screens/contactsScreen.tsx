import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Contact } from '../types'; 

type ContactsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Contacts'>;

const ContactsScreen = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<ContactsScreenNavigationProp>(); 

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        const limitedContacts = data.slice(0, 7).map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          thumbnailUrl: `https://robohash.org/${user.id}?size=50x50`,
        }));
        setContacts(limitedContacts);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
        setError('Failed to fetch contacts.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handlePress = (id: number) => {
    navigation.navigate('ContactDetail', { id }); 
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.contactCard}>
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={styles.thumbnail}
            />
            <View style={styles.contactInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    flexGrow: 1, 
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 1,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ContactsScreen;
