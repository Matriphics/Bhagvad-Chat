import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { sampleCitedResponses } from "../data/gita";

export function ChatScreen() {
  const [prompt, setPrompt] = useState("");
  const response = sampleCitedResponses[0];

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.kicker}>Gita Chat</Text>
        <Text style={styles.heading}>Ask the Gita anything</Text>
        <Text style={styles.subheading}>Answers are grounded in the text—with verse citations you can open and read.</Text>

      <View style={styles.chatCard}>
        <Text style={styles.questionLabel}>You</Text>
        <Text style={styles.questionText}>{prompt || response.question}</Text>
      </View>

      <View style={styles.chatCard}>
        <Text style={styles.answerLabel}>Gita AI</Text>
        <Text style={styles.answerText}>{response.answer}</Text>
        <View style={styles.citationRow}>
          {response.citations.map((citation) => (
            <View key={citation} style={styles.citationChip}>
              <Text style={styles.citationText}>BG {citation}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          value={prompt}
          onChangeText={setPrompt}
          placeholder="Ask anything..."
          placeholderTextColor={colors.muted}
          style={styles.input}
        />
        <Pressable style={styles.sendBtn}>
          <Text style={styles.sendText}>Send</Text>
        </Pressable>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    padding: 16,
    gap: 14,
    backgroundColor: colors.bg,
    flexGrow: 1,
    paddingBottom: 24,
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
  chatCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  questionLabel: {
    color: colors.accent,
    fontWeight: "700",
  },
  questionText: {
    color: colors.text,
    fontSize: 16,
  },
  answerLabel: {
    color: colors.success,
    fontWeight: "700",
  },
  answerText: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 22,
  },
  citationRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 6,
  },
  citationChip: {
    backgroundColor: colors.cardSoft,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  citationText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: "700",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  input: {
    flex: 1,
    backgroundColor: colors.surface,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  sendBtn: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingHorizontal: 18,
    justifyContent: "center",
  },
  sendText: {
    color: colors.onAccent,
    fontWeight: "800",
  },
});
