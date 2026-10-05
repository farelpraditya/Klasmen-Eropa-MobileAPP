// Union type: id liga hanya boleh salah satu dari dua nilai ini
export type LeagueId = "ucl" | "uel";

export interface League {
  readonly id: LeagueId;
  name: string;
  subtitle: string;
  color: string;
  directCount: number; // jumlah tim yang lolos langsung ke 16 besar
  playoffCount: number; // jumlah tim yang masuk playoff
}

export interface Team {
  readonly id: string;
  leagueId: LeagueId;
  name: string;
  country: string;
  countryCode: string; // kode bendera, contoh: "es", "gb-eng"
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  form?: string; // opsional, contoh: "WWDLW"
}
