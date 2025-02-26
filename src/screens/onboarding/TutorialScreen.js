import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export const TutorialScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: 'Track Your Symptoms',
      description: 'Log your daily symptoms and get personalized supplement recommendations.',
      image: require('../../../assets/tutorial-1.png'),
    },
    {
      title: 'Explore Supplements',
      description: 'Access our FDA-compliant database of 500+ supplements with teen-specific dosages.',
      image: require('../../../assets/tutorial-2.png'),
    },
    {
      title: 'Get Smart Recommendations',
      description: 'Our AI analyzes your symptoms and suggests the best supplements for your needs.',
      image: require('../../../assets/tutorial-3.png'),
    },
    {
      title: 'Learn and Grow',
      description: 'Access educational content and stay informed about natural health solutions.',
      image: require('../../../assets/tutorial-4.png'),
    },
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.replace('UserPreferences');
    }
  };

  const handleSkip = () => {
    navigation.replace('UserPreferences');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={tutorialSteps[currentStep].image}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{tutorialSteps[currentStep].title}</Text>
        <Text style={styles.description}>{tutorialSteps[currentStep].description}</Text>

        <View style={styles.pagination}>
          {tutorialSteps.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentStep === index && styles.activeDot]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentStep === tutorialSteps.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    color: '#666',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a8dadc',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#a8dadc',
    width: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#a8dadc',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});