

import React, { useEffect, useState } from 'react';
import { Hitposts, RootStackParamList } from '../types';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import Post from '../Components/Post';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

function Home({ navigation }: NativeStackScreenProps<RootStackParamList>): JSX.Element {

    const [allPosts, setAllPosts] = useState<Hitposts>({ hits: [] })

    async function fetchAPI() {
        let url = 'https://hn.algolia.com/api/v1/search?tags=front_page'
        let posts = await fetch(url)
        let allHitPosts = await posts.json()
        setAllPosts(allHitPosts)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <SafeAreaView>
            <FlatList data={allPosts.hits}
                renderItem={({ item }) =>
                    <TouchableHighlight
                        onPress={() =>
                            navigation.navigate('Details', { post: item })
                        } ><Post post={item} /></TouchableHighlight>

                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Home;
