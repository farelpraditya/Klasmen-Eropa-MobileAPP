import { League, Team } from "../types";

// Data DUMMY. Nanti bisa diganti dengan data asli / API.
export const leagues: League[] = [
  {
    id: "ucl",
    name: "UEFA Champions League",
    subtitle: "League Phase",
    color: "#3b82f6",
    directCount: 2,
    playoffCount: 3,
  },
  {
    id: "uel",
    name: "UEFA Europa League",
    subtitle: "League Phase",
    color: "#f97316",
    directCount: 2,
    playoffCount: 3,
  },
];

export const teams: Team[] = [
  // ===== UCL =====
  { id: "ucl-1", leagueId: "ucl", name: "Barcelona", country: "Spanyol", countryCode: "es", played: 6, won: 5, drawn: 0, lost: 1, goalsFor: 16, goalsAgainst: 7, form: "WWWLW" },
  { id: "ucl-2", leagueId: "ucl", name: "Liverpool", country: "Inggris", countryCode: "gb-eng", played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 12, goalsAgainst: 5, form: "WDWWL" },
  { id: "ucl-3", leagueId: "ucl", name: "Inter", country: "Italia", countryCode: "it", played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 10, goalsAgainst: 3, form: "WWDWL" },
  { id: "ucl-4", leagueId: "ucl", name: "Bayern Munich", country: "Jerman", countryCode: "de", played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 13, goalsAgainst: 8 },
  { id: "ucl-5", leagueId: "ucl", name: "Arsenal", country: "Inggris", countryCode: "gb-eng", played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 9, goalsAgainst: 6, form: "LWWDW" },
  { id: "ucl-6", leagueId: "ucl", name: "PSG", country: "Prancis", countryCode: "fr", played: 6, won: 2, drawn: 2, lost: 2, goalsFor: 8, goalsAgainst: 8 },
  { id: "ucl-7", leagueId: "ucl", name: "Atletico Madrid", country: "Spanyol", countryCode: "es", played: 6, won: 2, drawn: 1, lost: 3, goalsFor: 7, goalsAgainst: 10, form: "LLWDL" },
  { id: "ucl-8", leagueId: "ucl", name: "Celtic", country: "Skotlandia", countryCode: "gb-sct", played: 6, won: 0, drawn: 1, lost: 5, goalsFor: 3, goalsAgainst: 15 },
  // ===== UEL =====
  { id: "uel-1", leagueId: "uel", name: "Tottenham", country: "Inggris", countryCode: "gb-eng", played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 11, goalsAgainst: 5, form: "WWWDL" },
  { id: "uel-2", leagueId: "uel", name: "AS Roma", country: "Italia", countryCode: "it", played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 9, goalsAgainst: 5 },
  { id: "uel-3", leagueId: "uel", name: "Lyon", country: "Prancis", countryCode: "fr", played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 10, goalsAgainst: 8, form: "WLDWW" },
  { id: "uel-4", leagueId: "uel", name: "Porto", country: "Portugal", countryCode: "pt", played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 8, goalsAgainst: 6 },
  { id: "uel-5", leagueId: "uel", name: "Athletic Club", country: "Spanyol", countryCode: "es", played: 6, won: 2, drawn: 2, lost: 2, goalsFor: 7, goalsAgainst: 7 },
  { id: "uel-6", leagueId: "uel", name: "Eintracht Frankfurt", country: "Jerman", countryCode: "de", played: 6, won: 2, drawn: 1, lost: 3, goalsFor: 8, goalsAgainst: 11 },
  { id: "uel-7", leagueId: "uel", name: "Ajax", country: "Belanda", countryCode: "nl", played: 6, won: 1, drawn: 2, lost: 3, goalsFor: 6, goalsAgainst: 10, form: "LDLLW" },
  { id: "uel-8", leagueId: "uel", name: "Galatasaray", country: "Turki", countryCode: "tr", played: 6, won: 0, drawn: 2, lost: 4, goalsFor: 4, goalsAgainst: 12 },
];
