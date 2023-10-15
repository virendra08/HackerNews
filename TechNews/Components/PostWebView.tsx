

import React, { useEffect, useState } from 'react';
import { Hitposts, PostDetails, RootStackParamList } from '../types';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

function PostWebView({ navigation, route }: Props): JSX.Element {
    let post: PostDetails = route.params.post
    return (
        <WebView source={{ uri: post.url }} style={{ flex: 1 }} />
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

export default PostWebView;
{/* <WebView source={{ uri: {post.url} }}/> */ }