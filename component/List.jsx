import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { FlatList, Text, View } from 'react-native';

export default function List() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios("https://restcountries.com/v3.1/all").then((reponse) => {
            const countriesData = reponse.data;
            console.log(countriesData)
            setCountries(countriesData);
            console.log(countries)
        })
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name.common + ": " + item.capital}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={countries}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}