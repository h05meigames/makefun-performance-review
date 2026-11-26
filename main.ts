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
// REVISI v3 (26 Nov 2026 ~15:55 WIB):
//   Cacat v2: klausa tengah "attempted 0% alone" punya dua masalah.
//   (1) Subjek ambigu — "attempted" bisa dibaca sebagai agent yang
//   mencoba, padahal yang dinilai adalah operator. (2) "Attempted"
//   adalah kata kerja yang lemah untuk lelucon ini: mencoba 0% masih
//   terdengar seperti usaha; yang lucu justru operator tidak
//   MENYELESAIKAN apa pun sendiri. Bonus: "at delegation" tidak
//   idiomatis untuk bahasa review HR.
//   Perbaikan v3: "attempted 0% alone" -> "completed 0% solo" —
//   subjek kini jelas operator ("completed" = hasil kerjanya), kata
//   kerja "completed" adalah metrik HR yang jujur dan lebih tajam,
//   "solo" lebih pendek dan berirama daripada "alone". "at" -> "in
//   delegation" memperbaiki idiom. Punch "Chief Prompt Officer"
//   dan angka 100% vs 0% dipertahankan utuh.
//
// BARIS FINAL (v3):
//   Sudut: penilaian HR yang terlalu jujur — operator "melebihi
//   ekspektasi" justru dalam mendelegasikan segalanya, dan hadiahnya
//   adalah promosi ke jabatan palsu "Chief Prompt Officer". Bahasa
//   review-nya utuh (Exceeds expectations / assigned / completed /
//   promoted), angka 100% vs 0% memberi ketukan komedi yang rapi, dan
//   punch mendarat di kata terakhir: jabatan yang terdengar penting
//   tapi kosong. Tidak ada kopi, meeting, reboot, atau unplug —
//   sudutnya segar.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Exceeds expectations in delegation: assigned 100% of tasks to me, completed 0% solo — promoted to Chief Prompt Officer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`characters: ${ENTRY.length}`);
