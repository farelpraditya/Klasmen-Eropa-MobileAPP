import { StyleSheet } from "react-native";

// Warna dipisah supaya mudah dipakai ulang (juga untuk inline style)
export const colors = {
  background: "#0b1220",
  card: "#131c2e",
  cardAlt: "#1a2740",
  border: "#22304a",
  text: "#f1f5f9",
  muted: "#8b9bb4",
  accent: "#38bdf8",
  direct: "#22c55e", // lolos langsung
  playoff: "#f59e0b", // playoff
  out: "#ef4444", // tersingkir
  draw: "#64748b",
  positive: "#4ade80",
  negative: "#f87171",
};

// EXTERNAL STYLING
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // ===== Hero / header =====
  hero: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  heroTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#38bdf822",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  heroSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 2,
  },
  heroStats: {
    flexDirection: "row",
    marginTop: 18,
  },
  statChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardAlt,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.text,
    marginLeft: 6,
  },

  // ===== Kartu liga =====
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 6,
    shadowColor: "#000",
  },
  cardAccent: {
    height: 4,
  },
  leagueHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  leagueIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  leagueInfo: {
    flex: 1,
    marginLeft: 12,
  },
  leagueName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  leagueSubtitle: {
    fontSize: 12,
    color: colors.muted,
    marginTop: 2,
  },
  leagueBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: colors.cardAlt,
  },
  leagueBadgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.muted,
  },

  // ===== Tabel =====
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingRight: 12,
    backgroundColor: colors.cardAlt,
  },
  headTeam: {
    flex: 1,
    marginLeft: 92,
    fontSize: 11,
    fontWeight: "bold",
    color: colors.muted,
  },
  headCell: {
    fontSize: 11,
    fontWeight: "bold",
    color: colors.muted,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  zoneStripe: {
    width: 4,
  },
  rowContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  posBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  posText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  flag: {
    width: 28,
    height: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  teamBox: {
    flex: 1,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },
  teamMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  teamCountry: {
    fontSize: 11,
    color: colors.muted,
  },
  formRow: {
    flexDirection: "row",
    marginLeft: 8,
  },
  formDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 3,
  },
  cell: {
    width: 26,
    fontSize: 13,
    color: colors.text,
    textAlign: "center",
  },
  gdCell: {
    width: 38,
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
  },
  pointsPill: {
    width: 42,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: colors.cardAlt,
    alignItems: "center",
  },
  pointsText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },

  // ===== Legenda & footer =====
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 14,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  legendText: {
    fontSize: 11,
    color: colors.muted,
    marginLeft: 6,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: colors.muted,
    marginBottom: 40,
  },
});
