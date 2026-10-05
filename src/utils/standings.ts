import { colors } from "../constants/styles";
import { teams } from "../data/standings";
import { League, LeagueId, Team } from "../types";

// CUSTOM FUNCTION (arrow function)
export const getPoints = (team: Team): number => team.won * 3 + team.drawn;

export const getGoalDiff = (team: Team): number =>
  team.goalsFor - team.goalsAgainst;

// Format selisih gol: 5 -> "+5", -3 -> "-3"
export const formatGoalDiff = (gd: number): string =>
  gd > 0 ? `+${gd}` : `${gd}`;

// URL bendera dari kode negara
export const getFlagUrl = (code: string): string =>
  `https://flagcdn.com/w80/${code}.png`;

// Ambil tim milik 1 liga, lalu urutkan: poin -> selisih gol -> gol masuk
export function getSortedTeams(leagueId: LeagueId): Team[] {
  // filter() membuat array baru, jadi array asli "teams" tidak ikut berubah
  return teams
    .filter((team) => team.leagueId === leagueId)
    .sort((a, b) => {
      if (getPoints(b) !== getPoints(a)) return getPoints(b) - getPoints(a);
      if (getGoalDiff(b) !== getGoalDiff(a)) return getGoalDiff(b) - getGoalDiff(a);
      return b.goalsFor - a.goalsFor;
    });
}

// Tentukan warna zona berdasarkan posisi di klasemen
export function getZoneColor(position: number, league: League): string {
  if (position <= league.directCount) {
    return colors.direct;
  } else if (position <= league.directCount + league.playoffCount) {
    return colors.playoff;
  } else {
    return colors.out;
  }
}

// Warna titik form: W = menang, D = seri, L = kalah
export function getFormColor(result: string): string {
  switch (result) {
    case "W":
      return colors.direct;
    case "D":
      return colors.draw;
    default:
      return colors.out;
  }
}
