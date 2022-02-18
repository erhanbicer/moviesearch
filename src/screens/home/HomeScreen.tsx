import React, { FC } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Loading, Text } from '@components';
import R from '@resources';
import { useMoviesFetch } from '@hooks';
import { MovieItem } from '@screens/home/component/MovieItem';
import { SearchMovie } from '@services/APIService/DTOs';

export const HomeScreen: FC = () => {
  const { movies, searchTerm, loading, errorText, setSearchTerm, fetchMovie } =
    useMoviesFetch();

  if (movies === undefined) {
    return <Loading />;
  }

  const renderItem: ListRenderItem<SearchMovie> = ({ item }) => {
    return <MovieItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={'Search movie...'}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={R.theme.placeholder}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={() => fetchMovie(searchTerm)}
          selectionColor={R.theme.white}
          clearButtonMode={'while-editing'}
        />
        {loading ? (
          <Loading />
        ) : (
          <>
            {errorText ? (
              <Text>{errorText}</Text>
            ) : (
              <FlatList
                style={styles.flex}
                keyExtractor={(item) => item.imdbID}
                data={movies}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: R.dimen.m_w,
    backgroundColor: R.theme.primary,
  },
  inputContainer: {
    backgroundColor: R.theme.primary,
  },
  textInput: {
    height: R.dimen.xxl_h,
    width: '80%',
    marginVertical: R.dimen.m_h,
    marginHorizontal: '10%',
    borderColor: R.theme.white,
    borderWidth: 0.5,
    color: R.theme.white,
    fontSize: R.fontSize.h3,
    paddingLeft: R.dimen.xs_w,
    borderRadius: R.dimen.xs_h,
  },
});
