import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ParentalConsentScreen = ({ navigation }) => {
  const [parentEmail, setParentEmail] = useState('');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');

  const handleSubmit = async () => {
    // TODO: Implement parental consent verification
    // 1. Send verification email to parent
    // 2. Store consent record in GDPR-compliant storage
    // 3. Navigate to appropriate screen based on verification
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Parental Consent Required</Text>
          <Text style={styles.subtitle}>
            For users under 16, we need parent/guardian approval to comply with EU regulations.
          </Text>

          <View style={styles.form}>
            <Text style={styles.label}>Parent/Guardian Name</Text>
            <TextInput
              style={styles.input}
              value={parentName}
              onChangeText={setParentName}
              placeholder="Full Name"
            />

            <Text style={styles.label}>Parent/Guardian Email</Text>
            <TextInput
              style={styles.input}
              value={parentEmail}
              onChangeText={setParentEmail}
              placeholder="email@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Child's Name</Text>
            <TextInput
              style={styles.input}
              value={childName}
              onChangeText={setChildName}
              placeholder="Child's Full Name"
            />

            <Text style={styles.label}>Child's Age</Text>
            <TextInput
              style={styles.input}
              value={childAge}
              onChangeText={setChildAge}
              placeholder="Age"
              keyboardType="number-pad"
              maxLength={2}
            />

            <TouchableOpacity 
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Request Consent</Text>
            </TouchableOpacity>

            <Text style={styles.disclaimer}>
              By submitting this form, you agree to our Terms of Service and Privacy Policy.
              We will process this information in accordance with GDPR requirements.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a8dadc',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#a8dadc',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  disclaimer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 18,
  },
});