import { Alert, Image, Pressable, Text, View } from "react-native";
import { colors, styles } from "../constants/styles";
import { League, Team } from "../types";
import {
  formatGoalDiff,
  getFlagUrl,
  getFormColor,
  getGoalDiff,
  getPoints,
  getZoneColor,
} from "../utils/standings";

interface StandingRowProps {
  team: Team;
  position: number;
  league: League;
}

export default function StandingRow({
  team,
  position,
  league,
}: StandingRowProps) {
  const goalDiff = getGoalDiff(team);
  const zoneColor = getZoneColor(position, league);
  const formList = team.form ? team.form.split("") : [];

  // Function bawaan (Alert) dibungkus function custom, hanya jalan saat ditekan
  const showDetail = () => {
    Alert.alert(
      `#${position} ${team.name}`,
      `${team.country}\n` +
        `Main ${team.played} | M ${team.won} | S ${team.drawn} | K ${team.lost}\n` +
        `Gol ${team.goalsFor}:${team.goalsAgainst}\n` +
        `Form: ${team.form ? team.form : "-"}`,
    );
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.row, { opacity: pressed ? 0.7 : 1 }]}
      onPress={showDetail}
    >
      {/* INLINE STYLING: warna garis zona bergantung pada posisi */}
      <View style={[styles.zoneStripe, { backgroundColor: zoneColor }]} />

      <View style={styles.rowContent}>
        {/* INLINE STYLING: badge posisi mengikuti warna zona */}
        <View style={[styles.posBadge, { backgroundColor: `${zoneColor}33` }]}>
          <Text style={[styles.posText, { color: zoneColor }]}>{position}</Text>
        </View>

        <Image
          source={{ uri: getFlagUrl(team.countryCode) }}
          style={styles.flag}
        />

        <View style={styles.teamBox}>
          <Text style={styles.teamName}>{team.name}</Text>
          <View style={styles.teamMeta}>
            <Text style={styles.teamCountry}>{team.country}</Text>
            {/* LOOP map(): titik form W / D / L (hanya jika data form ada) */}
            <View style={styles.formRow}>
              {formList.map((result, index) => (
                <View
                  key={index}
                  style={[
                    styles.formDot,
                    { backgroundColor: getFormColor(result) },
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        <Text style={styles.cell}>{team.played}</Text>

        {/* INLINE STYLING: hijau jika positif, merah jika negatif */}
        <Text
          style={[
            styles.gdCell,
            { color: goalDiff >= 0 ? colors.positive : colors.negative },
          ]}
        >
          {formatGoalDiff(goalDiff)}
        </Text>

        <View style={styles.pointsPill}>
          <Text style={styles.pointsText}>{getPoints(team)}</Text>
        </View>
      </View>
    </Pressable>
  );
}
