import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { chapters } from "../data/gita";
import { ChapterStackParamList } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = NativeStackScreenProps<ChapterStackParamList, "ChaptersHome">;

export function ChaptersScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.kicker}>Explore</Text>
      <Text style={styles.heading}>Browse chapters</Text>
      <Text style={styles.subheading}>All 18 chapters of the Bhagavad Gita</Text>

      {chapters.map((chapter) => (
        <Pressable
          key={chapter.id}
          style={styles.chapterCard}
          onPress={() => navigation.navigate("ChapterVerses", { chapterId: chapter.id })}
        >
          <Text style={styles.chapterTitle}>
            {chapter.id}. {chapter.title}
          </Text>
          <Text style={styles.chapterSummary}>{chapter.summary}</Text>
          <View style={styles.tag}>
            <Text style={styles.tagText}>{chapter.verses.length} sample verses</Text>
          </View>
        </Pressable>
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
  kicker: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  heading: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.4,
  },
  subheading: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 4,
  },
  chapterCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chapterTitle: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 17,
  },
  chapterSummary: {
    color: colors.muted,
    lineHeight: 20,
  },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: colors.cardSoft,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    color: colors.accent,
    fontWeight: "700",
    fontSize: 12,
  },
});
