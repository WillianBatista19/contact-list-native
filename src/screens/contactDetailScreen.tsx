import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  website: string;
}

const ContactDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };

  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch contact details:', error);
        setError('Failed to fetch contact details.');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!contact) {
    return <Text>No contact found.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailCard}>
        <Image
          source={{ uri: `https://robohash.org/${contact.id}?size=100x100` }}
          style={styles.thumbnail}
        />
        <Text style={styles.title}>{contact.name}</Text>
        <Text>Email: {contact.email}</Text>
        <Text>Phone: {contact.phone}</Text>
        <Text>Address: {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</Text>
        <Text>Website: {contact.website}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} color="#007bff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    elevation: 3,
    alignItems: 'center',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#007bff',
    borderWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default ContactDetailScreen;
