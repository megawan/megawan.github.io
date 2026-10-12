# Belajar Huruf Hijaiyah

Game sederhana untuk mengenal 28 huruf hijaiyah dan harakatnya. Mode:

- Belajar: ketuk huruf untuk melihat dan mendengar namanya.
- Belajar harakat: tab Fathah, Kasrah, Dammah menampilkan dan membunyikan tiap huruf dengan harakat.
- Tebak dari suara, Tebak nama huruf, Tebak harakat.

## Suara

Rekaman ada di `audio/` (112 file mp3 kecil). Dibuat dengan suara Arab bawaan macOS (Majed).

| Pola nama file | Isi |
| --- | --- |
| `NN-nama.mp3`, mis. `02-ba.mp3` | nama huruf |
| `NN-fathah.mp3` | huruf dengan fathah (ba) |
| `NN-kasrah.mp3` | huruf dengan kasrah (bi) |
| `NN-dammah.mp3` | huruf dengan dammah (bu) |

NN adalah nomor huruf 01 sampai 28 (01 alif, 02 ba, 03 ta, dst). Untuk pelafalan yang lebih baik, ganti file mana pun dengan rekaman sendiri dengan nama yang sama.

Jika file tidak ditemukan, game memakai suara bahasa Arab bawaan perangkat sebagai cadangan.

## Huruf mirip

Menu "Huruf mirip" mengelompokkan huruf yang bentuknya hampir sama dan hanya berbeda pada titiknya (misalnya ب ت ث, ج ح خ, ص ض). Setiap kelompok punya kartu penjelasan titik dan latihan 8 soal. Kelompok didefinisikan di konstanta `GROUPS` dan `DOTS` pada `index.html`.
