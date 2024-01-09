import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const JobList = [
 {
    title: 'Recruitment Internship',
    company: 'Exotel',
    location: 'Bangalore, Karnataka',
    date: '18 days ago',
 },
 {
    title: 'Human Resources Internship',
    company: 'Exotel',
    location: 'Gurgaon',
    date: '00 Networks',
 },
 {
    title: 'Human Resources Internship',
    company: 'MasterChow',
    location: 'Delhi',
    date: 'Spaces 0',
 },
 {
    title: 'xyz Internship',
    company: 'xyz',
    location: 'mnbholh',
    date: 'Spaces 0',
 },
];

const Internships = () => {
 return (
    <ScrollView style={styles.container}>
     <Text style={styles.boardhead}>Job Board</Text>

    <Text>Show All Jobs</Text>
    <Text>Show All Internships</Text>
      {JobList.map((job, index) => (
        <TouchableOpacity key={index} style={styles.jobItem}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Text style={styles.jobCompany}>{job.company}</Text>
          <Text style={styles.jobLocation}>{job.location}</Text>
          <Text style={styles.jobDate}>{job.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 10,
    paddingTop:60,
 },
 boardhead:{
    fontWeight:'800',
    fontSize:40,
 },
 jobItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
 },
 jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
 },
 jobCompany: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
 },
 jobLocation: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
 },
 jobDate: {
    fontSize: 12,
    color: '#999',
 },
});

export default Internships;