import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';
import Teacher from '../../objects/Teacher';
import { forVerticalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFilterVisible] = useState(false);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites')
        .then((response) => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    function handleToggleVisible() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setIsFilterVisible(false);
        setTeachers(response.data);
    }
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
            <BorderlessButton onPress={handleToggleVisible}>
                <Feather name='filter' size={20} color='#FFF'/>
            </BorderlessButton>
            
            )}> 
                {isFiltersVisible && <View style={styles.searchForm}>
                    <Text style={styles.label}>
                        Matéria
                </Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria"
                        placeholderTextColor='#c1bccc'
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Dia da Semana
                            </Text>
                            <TextInput
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor='#c1bccc'
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>
                                Horário
                            </Text>
                            <TextInput
                                value={time}
                                onChangeText={text => setTime(text)}
                                style={styles.input}
                                placeholder="Qual horário?"
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                    </View>
                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>
                            Filtrar
                        </Text>
                    </RectButton>
                </View>}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
            >
                {
                    teachers.map((teacher: Teacher) => {
                        return <TeacherItem 
                            teacher={teacher} 
                            favorited={favorites.includes(teacher.id)}/>
                    })
                }
            </ScrollView>
        </View>
    );
}

export default TeacherList;