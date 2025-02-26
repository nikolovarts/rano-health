import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const UserPreferencesScreen = ({ navigation }) => {
  const [age, setAge] = useState('');
  const [allergies, setAllergies] = useState('');
  const [healthGoals, setHealthGoals] = useState([]);

  const goals = [
    'Energy Boost',
    'Better Sleep',
    'Stress Relief',
    'Immune Support',
    'Recovery',
    'Mental Focus'
  ];

  const toggleGoal = (goal) => {
    if (healthGoals.includes(goal)) {
      setHealthGoals(healthGoals.filter(g => g !== goal));
    } else {
      setHealthGoals([...healthGoals, goal]);
    }
  };

  const handleSubmit = () => {
    // TODO: Save user preferences to backend
    navigation.replace('NotificationPermission');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Tell Us About Yourself</Text>
          <Text style={styles.subtitle}>We'll personalize your experience based on your needs</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Your Age</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Age (14-19+)"
              keyboardType="number-pad"
              maxLength={2}
            />

            <Text style={styles.label}>Any Allergies?</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={allergies}
              onChangeText={setAllergies}
              placeholder="e.g., gluten, dairy, nuts"
              multiline
              numberOfLines={3}
            />

            <Text style={styles.label}>Health Goals</Text>
            <View style={styles.goalsContainer}>
              {goals.map((goal) => (
                <TouchableOpacity
                  key={goal}
                  style={[styles.goalChip, healthGoals.includes(goal) && styles.activeGoalChip]}
                  onPress={() => toggleGoal(goal)}
                >
                  <Text style={[styles.goalText, healthGoals.includes(goal) && styles.activeGoalText]}>
                    {goal}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity 
              style={[styles.button, (!age || healthGoals.length === 0) && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={!age || healthGoals.length === 0}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
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
  textArea: {
    height: 80,
    paddingTop: 12,
    paddingBottom: 12,
  },
  goalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  goalChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 8,
  },
  activeGoalChip: {
    backgroundColor: '#a8dadc',
  },
  goalText: {
    color: '#666',
  },
  activeGoalText: {
    color: '#ffffff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#a8dadc',
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});