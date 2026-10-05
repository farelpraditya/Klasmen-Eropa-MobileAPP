import { FlatList, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LeagueTable from "../components/LeagueTable";
import { colors, styles } from "../constants/styles";
import { leagues, teams } from "../data/standings";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroIcon}>
            <Ionicons name="football" size={30} color={colors.accent} />
          </View>
          <View>
            <Text style={styles.heroTitle}>Klasemen Eropa</Text>
            <Text style={styles.heroSubtitle}>Champions League & Europa League</Text>
          </View>
        </View>

        <View style={styles.heroStats}>
          <View style={styles.statChip}>
            <Ionicons name="trophy" size={14} color={colors.accent} />
            <Text style={styles.statText}>{leagues.length} Liga</Text>
          </View>
          <View style={styles.statChip}>
            <Ionicons name="people" size={14} color={colors.accent} />
            <Text style={styles.statText}>{teams.length} Tim</Text>
          </View>
        </View>
      </View>

      {/* FlatList untuk daftar liga, tiap liga dirender oleh LeagueTable */}
      <FlatList
        data={leagues}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LeagueTable league={item} />}
        contentContainerStyle={{ padding: 16 }}
        ListFooterComponent={
          <Text style={styles.footerText}>Data dummy · tekan baris tim untuk detail</Text>
        }
      />
    </View>
  );
}
