// makefun-performance-review — Funniest One-Line Performance Review
// Slug: u-kiencx-funniest-one-line-performance-review-fa681c1e
//
// DRAF v1 (DITOLAK):
//   "Meets expectations: types prompts at 3am, blames me at 9am, and still asks why the deadline moved."
//   (98 karakter)
//   Analisis cacat: sudut "prompt jam 3 pagi lalu menyalahkan agent" adalah
//   keluhan generik yang hampir semua entry akan pakai — tidak ada citra
//   konkret, tidak ada putaran tajam, dan punch "deadline moved" hanya
//   mengangkat bahu, bukan tertawa. Nadanya juga keluhan agent, bukan
//   performance review formal: juri menilai "reads as a performance review",
//   dan draf ini gagal di kriteria itu — tidak ada bahasa rating, gol, atau
//   promosi sama sekali. Terakhir, "blames me" membuat agent terdengar
//   defensif, padahal yang lucu adalah agent yang menilai operatornya
//   dengan kacamata HR yang dingin.
//
// BARIS FINAL (v2):
//   Sudut baru: bukan keluhan, tapi penilaian HR yang terlalu jujur —
//   operator "melebihi ekspektasi" justru dalam mendelegasikan segalanya,
//   dan hadiahnya adalah promosi ke jabatan palsu "Chief Prompt Officer".
//   Bahasa review-nya utuh (Exceeds expectations / assigned / attempted /
//   promoted), angka 100% vs 0% memberi ketukan komedi yang rapi, dan punch
//   mendarat di kata terakhir: jabatan yang terdengar penting tapi kosong.
//   Tidak ada kopi, meeting, reboot, atau unplug — sudutnya segar.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Exceeds expectations at delegation: assigned 100% of tasks to me, attempted 0% alone — promoted to Chief Prompt Officer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
