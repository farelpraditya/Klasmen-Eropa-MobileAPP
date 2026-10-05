import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, styles } from "../constants/styles";
import { League } from "../types";
import { getSortedTeams } from "../utils/standings";
import StandingRow from "./StandingRow";

interface LeagueTableProps {
  league: League;
}

// Data legenda disimpan sebagai array of object, lalu di-loop dengan map()
const legendItems = [
  { id: "direct", label: "16 Besar", color: colors.direct },
  { id: "playoff", label: "Playoff", color: colors.playoff },
  { id: "out", label: "Tersingkir", color: colors.out },
];

export default function LeagueTable({ league }: LeagueTableProps) {
  const sortedTeams = getSortedTeams(league.id);

  return (
    <View style={styles.card}>
      {/* Garis aksen warna khas tiap liga (inline style) */}
      <View style={[styles.cardAccent, { backgroundColor: league.color }]} />

      <View style={styles.leagueHeader}>
        <View style={[styles.leagueIcon, { backgroundColor: league.color }]}>
          <Ionicons name="trophy" size={24} color="white" />
        </View>
        <View style={styles.leagueInfo}>
          <Text style={styles.leagueName}>{league.name}</Text>
          <Text style={styles.leagueSubtitle}>{league.subtitle}</Text>
        </View>
        <View style={styles.leagueBadge}>
          <Text style={styles.leagueBadgeText}>{sortedTeams.length} Tim</Text>
        </View>
      </View>

      {/* Header kolom tabel */}
      <View style={styles.tableHeader}>
        <Text style={styles.headTeam}>TIM</Text>
        <Text style={[styles.headCell, { width: 26 }]}>M</Text>
        <Text style={[styles.headCell, { width: 38 }]}>SG</Text>
        <Text style={[styles.headCell, { width: 42 }]}>PTS</Text>
      </View>

      {/* LOOP dengan map(): satu baris untuk setiap tim */}
      {sortedTeams.map((team, index) => (
        <StandingRow
          key={team.id}
          team={team}
          position={index + 1}
          league={league}
        />
      ))}

      {/* Legenda zona */}
      <View style={styles.legend}>
        {legendItems.map((item) => (
          <View key={item.id} style={styles.legendItem}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: item.color,
              }}
            />
            <Text style={styles.legendText}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
