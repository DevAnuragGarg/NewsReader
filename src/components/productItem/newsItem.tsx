import { View, Text, Image } from 'react-native';
import { NewsItemProps } from './props.types';
import { styles } from './styles';
import { formatDate } from '../../utils/util';

export const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: news.urlToImage }} style={styles.image} />
        {news.publishedAt && (
          <Text style={styles.date}>
            Published on: {formatDate(news.publishedAt)}
          </Text>
        )}
        {news.author && (
          <Text style={styles.author}>Author: {news.author}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title} ellipsizeMode="tail">
          {news.title}
        </Text>
        <Text style={styles.description} numberOfLines={7} ellipsizeMode="tail">
          {news.description}
        </Text>
      </View>
    </View>
  );
};
