import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { styles } from './styles';
import { HomeScreenProps } from './props.type';
import { UIButton } from '../../components/button/uiButton';
import { useHomeUI } from './useHomeUI.hook';
import { NewsItem } from '../../components/productItem/newsItem';

export const HomeScreen: React.FC<HomeScreenProps> = props => {
  const { articles, loading, error, loadMore, onRefresh, isRefreshing } =
    useHomeUI(props);

  return (
    <View style={styles.root}>
      {error ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>Error: {error}</Text>
          <UIButton text="RETRY" onClick={() => onRefresh()} />
        </View>
      ) : loading && articles.length === 0 ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) =>
            item.url ?? `${item.title}_${item.publishedAt}_${index}`
          }
          renderItem={({ item }) => <NewsItem news={item} />}
          initialNumToRender={10} //  renders 10 items at startup
          maxToRenderPerBatch={10} //  renders 10 items per batch
          windowSize={5} // keep ~5 screens worth of rows in memory
          removeClippedSubviews={true} // unmount off-screen items
          onEndReached={() => {
            if (!loading) {
              console.log('Loading more news...');
              loadMore();
            }
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? (
              <View style={styles.loader}>
                <ActivityIndicator size="small" />
              </View>
            ) : null
          }
          ListEmptyComponent={() =>
            !loading && <Text style={styles.errorText}>No articles found.</Text>
          }
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              colors={['#0000ff']}
              tintColor="#0000ff"
            />
          }
        />
      )}
    </View>
  );
};
