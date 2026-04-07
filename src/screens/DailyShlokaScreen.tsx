import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { dailyShloka } from "../data/gita";
import { colors } from "../theme/colors";

export function DailyShlokaScreen() {
  const [enabled, setEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.kicker}>Daily rhythm</Text>
        <Text style={styles.heading}>Daily Shloka</Text>
        <Text style={styles.subheading}>Start your day with one verse—like a gentle reminder from the Gita.</Text>

        <View style={styles.switchCard}>
          <Text style={styles.label}>Enable daily notification</Text>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            thumbColor={enabled ? colors.accent : "#D3D3D3"}
            trackColor={{ false: "#E7D0B2", true: "#F1BD79" }}
          />
        </View>

        <View style={styles.verseCard}>
          <Text style={styles.reference}>{dailyShloka.reference}</Text>
          <Text style={styles.sanskrit}>{dailyShloka.sanskrit}</Text>
          <Text style={styles.translation}>{dailyShloka.translation}</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Preview notification</Text>
        </Pressable>
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
    backgroundColor: colors.bg,
    padding: 16,
    gap: 14,
    paddingBottom: 32,
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
  switchCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  verseCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  reference: {
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
    lineHeight: 22,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: colors.onAccent,
    fontWeight: "800",
  },
});
