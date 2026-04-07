import { Ionicons } from "@expo/vector-icons";
import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { sampleCitedResponses } from "../data/gita";
import type { RootTabParamList } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = MaterialTopTabScreenProps<RootTabParamList, "Home">;

type ChatMessage = { id: string; role: "user" | "bot"; text: string };

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#8AAAE8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
  },
  android: { elevation: 4 },
  default: {},
});

export function HomeScreen({ navigation }: Props) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "m1",
      role: "bot",
      text: "Hare Krishna. Ask me anything and I will answer with guidance from the Gita.",
    },
  ]);

  const chakraRotate = useRef(new Animated.Value(0)).current;
  const panelAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(chakraRotate, {
        toValue: 1,
        duration: 16000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    loop.start();
    return () => loop.stop();
  }, [chakraRotate]);

  useEffect(() => {
    Animated.timing(panelAnim, {
      toValue: isChatOpen ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [isChatOpen, panelAnim]);

  const chakraSpin = chakraRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const panelStyle = useMemo(
    () => ({
      opacity: panelAnim,
      transform: [
        {
          translateY: panelAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0],
          }),
        },
      ],
    }),
    [panelAnim],
  );

  const sendMessage = () => {
    const value = prompt.trim();
    if (!value) return;

    const userMessage: ChatMessage = { id: `${Date.now()}-u`, role: "user", text: value };
    const botPick = sampleCitedResponses[(messages.length + 1) % sampleCitedResponses.length];
    const botMessage: ChatMessage = {
      id: `${Date.now()}-b`,
      role: "bot",
      text: `${botPick.answer} (BG ${botPick.citations.join(", ")})`,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setPrompt("");
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View pointerEvents="none" style={styles.bgLayer}>
        <Animated.View style={[styles.chakraWrap, { transform: [{ rotate: chakraSpin }] }]}>
          <View style={styles.chakraRing}>
            {Array.from({ length: 12 }).map((_, idx) => (
              <View key={idx} style={[styles.spoke, { transform: [{ rotate: `${idx * 30}deg` }, { translateY: -42 }] }]} />
            ))}
            <View style={styles.chakraCore} />
          </View>
        </Animated.View>
        <View style={styles.featherWrap}>
          <View style={styles.featherStem} />
          <View style={styles.featherOuter} />
          <View style={styles.featherMid} />
          <View style={styles.featherInner} />
          <View style={styles.featherEye} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.brandRow}>
          <View style={styles.logoMark}>
            <Ionicons name="book" size={22} color={colors.accent} />
          </View>
          <View style={styles.brandTextCol}>
            <Text style={styles.appName}>Gita Chat</Text>
            <Text style={styles.appTagline}>Prayers · Shlokas · Chapters</Text>
          </View>
          <Pressable style={styles.installBtn}>
            <Text style={styles.installText}>Install</Text>
          </Pressable>
        </View>

        <View style={[styles.heroCard, cardShadow]}>
          <Text style={styles.heroTitle}>Grow your faith daily with Krishna's wisdom</Text>
          <Text style={styles.heroBody}>
            A calm spiritual companion inspired by Bhagavad Gita teachings, with chapter study, daily shloka, and guided answers.
          </Text>
          <View style={styles.heroActions}>
            <Pressable style={styles.primaryCta}>
              <Text style={styles.primaryCtaText}>Get Started</Text>
            </Pressable>
            <Pressable style={styles.secondaryCta} onPress={() => navigation.navigate("Chapters")}>
              <Text style={styles.secondaryCtaText}>Explore Chapters</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.trustRow}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.trustText}>Trusted by seekers for authentic, verse-rooted guidance</Text>
        </View>

        <Text style={styles.sectionHeading}>Our features</Text>
        <Pressable style={[styles.featureCard, cardShadow]} onPress={() => navigation.navigate("Daily")}>
          <Text style={styles.featureTitle}>Daily Shloka</Text>
          <Text style={styles.featureDesc}>Receive one mindful verse every day to begin with clarity and devotion.</Text>
        </Pressable>
        <Pressable style={[styles.featureCard, cardShadow]} onPress={() => navigation.navigate("Chapters")}>
          <Text style={styles.featureTitle}>All 18 Chapters</Text>
          <Text style={styles.featureDesc}>Study chapter summaries, Sanskrit verses, and clear translations in one place.</Text>
        </Pressable>
        <View style={[styles.featureCard, cardShadow]}>
          <Text style={styles.featureTitle}>Ask Gita Assistant</Text>
          <Text style={styles.featureDesc}>Use the floating assistant button at bottom-right to chat anytime from Home.</Text>
        </View>
      </ScrollView>

      <Animated.View style={[styles.chatPanel, panelStyle, { pointerEvents: isChatOpen ? "auto" : "none" }]}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatHeaderTitle}>Gita Assistant</Text>
          <Pressable onPress={() => setIsChatOpen(false)}>
            <Ionicons name="close" size={20} color={colors.muted} />
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.chatBody} showsVerticalScrollIndicator={false}>
          {messages.map((m) => (
            <View key={m.id} style={[styles.bubble, m.role === "user" ? styles.userBubble : styles.botBubble]}>
              <Text style={styles.bubbleText}>{m.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.chatInputRow}>
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            placeholder="Ask your question..."
            placeholderTextColor={colors.muted}
            style={styles.chatInput}
            onSubmitEditing={sendMessage}
          />
          <Pressable style={styles.sendBtn} onPress={sendMessage}>
            <Ionicons name="send" size={16} color={colors.onAccent} />
          </Pressable>
        </View>
      </Animated.View>

      <Pressable style={styles.fab} onPress={() => setIsChatOpen((v) => !v)}>
        <Ionicons name={isChatOpen ? "close" : "chatbubbles"} size={22} color={colors.onAccent} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  bgLayer: { ...StyleSheet.absoluteFillObject, overflow: "hidden" },
  chakraWrap: { position: "absolute", top: 120, right: -22, opacity: 0.2 },
  chakraRing: {
    width: 130, height: 130, borderRadius: 65, borderWidth: 4, borderColor: colors.accent, alignItems: "center", justifyContent: "center",
  },
  spoke: { position: "absolute", width: 3, height: 24, borderRadius: 2, backgroundColor: colors.accent },
  chakraCore: { width: 18, height: 18, borderRadius: 9, backgroundColor: colors.accent },
  featherWrap: { position: "absolute", top: 240, left: -14, width: 120, height: 180, opacity: 0.24, transform: [{ rotate: "-20deg" }] },
  featherStem: { position: "absolute", left: 50, top: 18, width: 5, height: 140, borderRadius: 3, backgroundColor: "#72A9EC" },
  featherOuter: { position: "absolute", left: 16, top: 0, width: 90, height: 140, borderRadius: 70, backgroundColor: "#DDF1FF", borderWidth: 2, borderColor: "#9BC6F8" },
  featherMid: { position: "absolute", left: 32, top: 30, width: 58, height: 84, borderRadius: 42, backgroundColor: "#A9CEF8" },
  featherInner: { position: "absolute", left: 42, top: 50, width: 38, height: 50, borderRadius: 25, backgroundColor: "#FFF4B8" },
  featherEye: { position: "absolute", left: 52, top: 62, width: 18, height: 18, borderRadius: 9, backgroundColor: "#4F6FD7" },
  scroll: { paddingHorizontal: 20, paddingBottom: 120, gap: 14 },
  brandRow: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 6 },
  logoMark: { width: 44, height: 44, borderRadius: 12, backgroundColor: colors.cardSoft, borderWidth: 1, borderColor: colors.border, alignItems: "center", justifyContent: "center" },
  brandTextCol: { flex: 1 },
  appName: { fontSize: 21, fontWeight: "800", color: colors.text },
  appTagline: { fontSize: 12, color: colors.muted, marginTop: 1 },
  installBtn: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 8 },
  installText: { color: colors.text, fontWeight: "700" },
  heroCard: { backgroundColor: colors.surface, borderRadius: 20, padding: 18, borderWidth: 1, borderColor: colors.border, gap: 10 },
  heroTitle: { fontSize: 28, lineHeight: 35, fontWeight: "800", color: colors.text },
  heroBody: { fontSize: 15, lineHeight: 23, color: colors.muted },
  heroActions: { flexDirection: "row", gap: 10, marginTop: 4 },
  primaryCta: { backgroundColor: colors.accent, borderRadius: 13, paddingVertical: 12, paddingHorizontal: 16 },
  primaryCtaText: { color: colors.onAccent, fontWeight: "800" },
  secondaryCta: { backgroundColor: colors.cardSoft, borderRadius: 13, paddingVertical: 12, paddingHorizontal: 16 },
  secondaryCtaText: { color: colors.text, fontWeight: "700" },
  trustRow: { flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 2 },
  stars: { color: colors.accent, letterSpacing: 1 },
  trustText: { flex: 1, color: colors.muted, fontSize: 13, fontWeight: "600" },
  sectionHeading: { fontSize: 20, fontWeight: "800", color: colors.text, marginTop: 8 },
  featureCard: { backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 16, gap: 5 },
  featureTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  featureDesc: { color: colors.muted, lineHeight: 21 },
  fab: {
    position: "absolute", right: 18, bottom: 22, width: 58, height: 58, borderRadius: 29, backgroundColor: colors.accent,
    alignItems: "center", justifyContent: "center", ...Platform.select({ ios: { shadowColor: "#7C9FE8", shadowOpacity: 0.35, shadowRadius: 14, shadowOffset: { width: 0, height: 6 } }, android: { elevation: 8 }, default: {} }),
  },
  chatPanel: {
    position: "absolute", right: 18, bottom: 90, width: 320, maxHeight: 420, backgroundColor: colors.surface,
    borderRadius: 16, borderWidth: 1, borderColor: colors.border, overflow: "hidden",
    ...Platform.select({ ios: { shadowColor: "#7897DA", shadowOpacity: 0.24, shadowRadius: 14, shadowOffset: { width: 0, height: 6 } }, android: { elevation: 8 }, default: {} }),
  },
  chatHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: colors.border },
  chatHeaderTitle: { color: colors.text, fontWeight: "800" },
  chatBody: { padding: 12, gap: 8 },
  bubble: { paddingHorizontal: 11, paddingVertical: 9, borderRadius: 12, maxWidth: "88%" },
  botBubble: { alignSelf: "flex-start", backgroundColor: colors.cardSoft },
  userBubble: { alignSelf: "flex-end", backgroundColor: colors.card },
  bubbleText: { color: colors.text, lineHeight: 19, fontSize: 13 },
  chatInputRow: { flexDirection: "row", gap: 8, padding: 10, borderTopWidth: 1, borderTopColor: colors.border },
  chatInput: { flex: 1, backgroundColor: colors.bg, borderWidth: 1, borderColor: colors.border, borderRadius: 10, paddingHorizontal: 10, color: colors.text },
  sendBtn: { width: 38, borderRadius: 10, backgroundColor: colors.accent, alignItems: "center", justifyContent: "center" },
});
