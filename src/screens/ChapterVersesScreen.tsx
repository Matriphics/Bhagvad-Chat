import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { chapters } from "../data/gita";
import { ChapterStackParamList } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = NativeStackScreenProps<ChapterStackParamList, "ChapterVerses">;

export function ChapterVersesScreen({ route }: Props) {
  const chapter = chapters.find((item) => item.id === route.params.chapterId);
  if (!chapter) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {chapter.id}. {chapter.title}
      </Text>
      <Text style={styles.subheading}>{chapter.summary}</Text>

      {chapter.verses.map((verse) => (
        <View key={verse.id} style={styles.verseCard}>
          <Text style={styles.verseRef}>
            Verse {chapter.id}.{verse.id}
          </Text>
          <Text style={styles.sanskrit}>{verse.sanskrit}</Text>
          <Text style={styles.translation}>{verse.translation}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    padding: 16,
    gap: 12,
    paddingBottom: 32,
    flexGrow: 1,
  },
  heading: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  subheading: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 6,
  },
  verseCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 8,
  },
  verseRef: {
    color: colors.accent,
    fontWeight: "700",
  },
  sanskrit: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 28,
  },
  translation: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
