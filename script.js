// ==========================================================================
// 🛠️ DATABASE LENGKAP CITAMPI STORIES
// ==========================================================================
const defaultData = {
    // ----------------------------------------------------------------------
    // 1. CRAFTING
    // ----------------------------------------------------------------------
    crafting: [
        {
            title: "Media Pembenihan",
            icon: "🌱",
            desc: "Resep mengubah hasil panen, ranting, dan buah menjadi benih",
            items: [
                { level: 1, title: "Benih Random", icon: "🌱", category: "Level 1", details: [{ label: "Resep", val: "1x Ranting Daun" }], tip: "Hasil: 1x Benih Random" },
                { level: 1, title: "Ranting Daun", icon: "🌿", category: "Level 1", details: [{ label: "Resep", val: "1x Kayu Kering" }], tip: "Hasil: Ranting Daun" },
                { level: 1, title: "Benih Apel", icon: "🍎", category: "Level 1", details: [{ label: "Resep A", val: "1x Apel (Hasil: 2x Benih Apel)" }, { label: "Resep B", val: "1x Bekas Apel (Hasil: 1x Benih Apel)" }], tip: "Bahan bibit pohon apel" },
                { level: 1, title: "Benih Bayam", icon: "🥬", category: "Level 1", details: [{ label: "Resep", val: "1x Bayam" }], tip: "Hasil: 2x Benih Bayam" },
                { level: 1, title: "Benih Brokoli", icon: "🥦", category: "Level 1", details: [{ label: "Resep", val: "1x Brokoli" }], tip: "Hasil: 2x Benih Brokoli" },
                { level: 1, title: "Benih Jeruk", icon: "🍊", category: "Level 1", details: [{ label: "Resep", val: "1x Jeruk" }], tip: "Hasil: 2x Benih Jeruk" },
                { level: 1, title: "Benih Kailan", icon: "🥬", category: "Level 1", details: [{ label: "Resep", val: "1x Kailan" }], tip: "Hasil: 2x Benih Kailan" },
                { level: 1, title: "Benih Kol", icon: "🥗", category: "Level 1", details: [{ label: "Resep", val: "1x Kol" }], tip: "Hasil: 2x Benih Kol" },
                { level: 1, title: "Benih Melon", icon: "🍈", category: "Level 1", details: [{ label: "Resep", val: "1x Melon" }], tip: "Hasil: 2x Benih Melon" },
                { level: 1, title: "Benih Nangka", icon: "🍈", category: "Level 1", details: [{ label: "Resep", val: "1x Nangka" }], tip: "Hasil: 2x Benih Nangka" },
                { level: 1, title: "Benih Semangka", icon: "🍉", category: "Level 1", details: [{ label: "Resep", val: "1x Semangka" }], tip: "Hasil: 2x Benih Semangka" },
                { level: 1, title: "Benih Terong", icon: "🍆", category: "Level 1", details: [{ label: "Resep", val: "1x Terong" }], tip: "Hasil: 2x Benih Terong" },
                { level: 1, title: "Benih Tomat", icon: "🍅", category: "Level 1", details: [{ label: "Resep", val: "1x Tomat" }], tip: "Hasil: 2x Benih Tomat" },
                { level: 1, title: "Benih Tebu", icon: "🎋", category: "Level 1", details: [{ label: "Resep", val: "1x Batang Tebu" }], tip: "Hasil: 1x Benih Tebu" },
                { level: 2, title: "Benih Jengkol", icon: "🫘", category: "Level 2", details: [{ label: "Resep", val: "1x Jengkol" }], tip: "Hasil: Benih Jengkol" },
                { level: 2, title: "Benih Cabai", icon: "🌶️", category: "Level 2", details: [{ label: "Resep", val: "1x Cabai" }], tip: "Hasil: Benih Cabai" }
            ]
        },
        {
            title: "Meja Produksi",
            icon: "🛠️",
            desc: "Resep perkakas, barang rakitan, dan perabot Level 1 & Level 2",
            items: [
                // LEVEL 1
                { level: 1, title: "Loncat Tali Rumahan", icon: "🪢", category: "Level 1", details: [{ label: "Resep", val: "2x Kawat + 1x Lakban" }], tip: "Alat olahraga rumahan" },
                { level: 1, title: "Getah Pohon", icon: "🧪", category: "Level 1", details: [{ label: "Resep A", val: "2x Ranting Daun (1x Getah)" }, { label: "Resep B", val: "1x Nangka (3x Getah)" }, { label: "Resep C", val: "5x Benih Random (1x Getah)" }], tip: "Bahan perekat penting" },
                { level: 1, title: "Serpihan Serat", icon: "🧶", category: "Level 1", details: [{ label: "Resep A", val: "3x Sampah Kayu/Kain/Kertas (1x Serat)" }, { label: "Resep B", val: "4x Benih Random (1x Serat)" }, { label: "Resep C", val: "1x Kayu Gelondong (3x Serat)" }], tip: "Bahan kain dan papan" },
                { level: 1, title: "Tube Lem", icon: "🧴", category: "Level 1", details: [{ label: "Resep", val: "2x Getah Pohon + 1x Thinner" }], tip: "Bahan perekat perabot" },
                { level: 1, title: "Batu Hias", icon: "🪨", category: "Level 1", details: [{ label: "Resep", val: "1x Batu" }], tip: "Batu olahan dekoratif" },
                { level: 1, title: "Perangkap Tikus", icon: "🪤", category: "Level 1", details: [{ label: "Resep", val: "Tripleks + Serpihan Logam + Tube Lem" }], tip: "Membasmi hama di kosan" },
                { level: 1, title: "Serpihan Logam", icon: "🔩", category: "Level 1", details: [{ label: "Resep", val: "2x Sampah Logam" }], tip: "Hasil: 1x Serpihan Logam" },
                { level: 1, title: "Tripleks", icon: "🪵", category: "Level 1", details: [{ label: "Resep", val: "2x Serpihan Serat + Tube Lem" }], tip: "Bahan dasar bangunan & perabot" },
                { level: 1, title: "Boneka Perca", icon: "🧸", category: "Level 1", details: [{ label: "Resep", val: "Serpihan Serat + Kain + Benang Jahit" }], tip: "Cocok untuk hadiah anak-anak" },
                { level: 1, title: "Balok Mainan", icon: "🧱", category: "Level 1", details: [{ label: "Resep", val: "Kayu Gelondong + Kaleng Cat" }], tip: "Mainan anak" },
                { level: 1, title: "Mainan Tradisi", icon: "🎎", category: "Level 1", details: [{ label: "Resep", val: "Tanah Liat + Benih Random + Kayu Kering" }], tip: "Kerajinan tangan tradisional" },
                { level: 1, title: "Kayu Kering", icon: "🪵", category: "Level 1", details: [{ label: "Resep", val: "Ranting Daun" }], tip: "Bahan bakar & kerajinan" },
                { level: 1, title: "Kawat", icon: "➰", category: "Level 1", details: [{ label: "Resep", val: "1x Plat Baja" }], tip: "Hasil: 3x Kawat" },
                { level: 1, title: "Kabel", icon: "🔌", category: "Level 1", details: [{ label: "Resep A", val: "4x Colokan + Lakban" }, { label: "Resep B", val: "Kawat + Bola Karet + Thinner" }], tip: "Komponen sirkuit listrik" },
                { level: 1, title: "Bola Karet", icon: "🎾", category: "Level 1", details: [{ label: "Resep", val: "2x Karet Gelang + Pelumas" }], tip: "Material elastis" },
                { level: 1, title: "Barbel Rumahan", icon: "🏋️", category: "Level 1", details: [{ label: "Resep", val: "1x Sak Semen + 2x Kaleng Cat + Batangan Logam" }], tip: "Menaikkan skill kekuatan fisik" },
                { level: 1, title: "Tumpukan Jerami", icon: "🌾", category: "Level 1", details: [{ label: "Resep", val: "5x Rumput Kering" }], tip: "Hasil: 1x Tumpukan Jerami" },
                { level: 1, title: "Makanan Rusa", icon: "🦌", category: "Level 1", details: [{ label: "Resep", val: "2x Rumput Kering + Tepung" }], tip: "Pakan satwa liar" },
                { level: 1, title: "Kalung Name Tag", icon: "🏷️", category: "Level 1", details: [{ label: "Resep", val: "Kaca + Kawat" }], tip: "Aksesoris tanda pengenal" },
                { level: 1, title: "Tali Tambang", icon: "🪢", category: "Level 1", details: [{ label: "Resep A", val: "3x Rumput Kering + Benang Jahit" }, { label: "Resep B", val: "Tumpukan Jerami + Benang Jahit" }], tip: "Tali pengikat kuat" },
                { level: 1, title: "Petasan", icon: "🧨", category: "Level 1", details: [{ label: "Resep", val: "Briket Arang + Gulungan Kertas + Tali Tambang" }], tip: "Petasan perayaan" },
                { level: 1, title: "Gula", icon: "🍬", category: "Level 1", details: [{ label: "Resep", val: "2x Batang Tebu" }], tip: "Pemanis masakan" },
                { level: 1, title: "Gulungan Kertas", icon: "📜", category: "Level 1", details: [{ label: "Resep", val: "2x Serpihan Serat + Kaleng Cat" }], tip: "Bahan tulis dan kerajinan" },
                { level: 1, title: "Perban", icon: "🩹", category: "Level 1", details: [{ label: "Resep", val: "Kain + Antiseptik" }], tip: "Pertolongan pertama" },
                { level: 1, title: "Kain Wol", icon: "🧶", category: "Level 1", details: [{ label: "Resep", val: "4x Bola Bulu" }], tip: "Bahan pakaian hangat" },
                { level: 1, title: "Toples Ikan", icon: "🐠", category: "Level 1", details: [{ label: "Resep", val: "Toples Kaca + Ikan Pari + Ikan Louhan + Ikan Discus + Ikan Harimau" }], tip: "Pajangan ikan hias" },
                { level: 1, title: "Gel Rambut", icon: "💇", category: "Level 1", details: [{ label: "Resep", val: "Parfum + Getah Pohon" }], tip: "Meningkatkan penampilan" },
                { level: 1, title: "Kain Katun Twill", icon: "🧵", category: "Level 1", details: [{ label: "Resep", val: "Kain + Kain Wol + Jarum + Benang Jahit" }], tip: "Kain pakaian tebal premium" },
                { level: 1, title: "Lemari Baju", icon: "🚪", category: "Level 1", details: [{ label: "Resep", val: "Kayu Gelondong + Paku + Kaleng Cat + Tube Lem" }], tip: "Perabot kosan" },
                
                // LEVEL 2
                { level: 2, title: "Dinamo", icon: "⚙️", category: "Level 2", details: [{ label: "Resep", val: "Kabel + Kawat + Gir Mesin + Plat Baja + Pelumas" }], tip: "Komponen mesin berdaya gerak" },
                { level: 2, title: "Terpal", icon: "⛺", category: "Level 2", details: [{ label: "Resep A", val: "Kain + Bola Karet + Tube Lem + Pelumas" }, { label: "Resep B", val: "2x Spanduk Bekas + Thinner" }], tip: "Pelindung atap dan tambak" },
                { level: 2, title: "Pilar Marmer", icon: "🏛️", category: "Level 2", details: [{ label: "Resep", val: "2x Batu Marmer + Tube Lem + Pasir" }], tip: "Material arsitektur megah" },
                { level: 2, title: "Lampu Bohlam", icon: "💡", category: "Level 2", details: [{ label: "Resep", val: "Kaca + Kabel + Kawat + Sirkuit Elektronik" }], tip: "Penerangan rumah" },
                { level: 2, title: "Walkie Talkie", icon: "📻", category: "Level 2", details: [{ label: "Resep", val: "Baterai + Kawat + Sirkuit Elektronik" }], tip: "Alat komunikasi jarak jauh" },
                { level: 2, title: "Mesin Bubut", icon: "🏭", category: "Level 2", details: [{ label: "Resep", val: "Mur dan Baut + Gir Mesin + Batangan Logam" }], tip: "Mesin industri perkakas" },
                { level: 2, title: "Sekop Baja", icon: "⛏️", category: "Level 2", details: [{ label: "Resep", val: "Pipa Logam + Plat Baja + Paku + Kawat" }], tip: "Alat gali tanah tambang/kebun" },
                { level: 2, title: "Lampu Senter", icon: "🔦", category: "Level 2", details: [{ label: "Resep", val: "Pipa Logam + Baterai + Lampu Bohlam" }], tip: "Penerangan malam hari" },
                { level: 2, title: "Laptop Rakitan", icon: "💻", category: "Level 2", details: [{ label: "Resep", val: "Sirkuit Elektronik + 2x Hape Tua Rusak + Plat Baja + Mur dan Baut" }], tip: "Freelance & melamar posisi IT" },
                { level: 2, title: "Boneka Jelangkung", icon: "🪵", category: "Level 2", details: [{ label: "Resep", val: "Bambu + 2x Rotan + Batok Kelapa" }], tip: "Benda mistis unik" },
                { level: 2, title: "Saputangan", icon: "🧣", category: "Level 2", details: [{ label: "Resep", val: "Bandana + Parfum + Benang Jahit + Jarum" }], tip: "Kain saputangan harum" },
                { level: 2, title: "Batu Nisan", icon: "🪦", category: "Level 2", details: [{ label: "Resep", val: "Batu Marmer + Batu Hias + Kerikil Warna Warni" }], tip: "Batu nisan pemakaman" },
                { level: 2, title: "Bola Api", icon: "🔥", category: "Level 2", details: [{ label: "Resep", val: "2x Rotan + Tumpukan Jerami + Thinner" }], tip: "Benda atraksi api" },
                { level: 2, title: "Kembang Tujuh Rupa", icon: "🌸", category: "Level 2", details: [{ label: "Resep", val: "3x Bunga + Jantung Pisang" }], tip: "Bunga sesajen tradisi" },
                { level: 2, title: "Air Doa", icon: "💧", category: "Level 2", details: [{ label: "Resep", val: "Cangkir + Angelfish + Kuas" }], tip: "Air berkah penyembuh" },
                { level: 2, title: "Selendang Sutera", icon: "🧣", category: "Level 2", details: [{ label: "Resep", val: "2x Saputangan + Benang Jahit" }], tip: "Kain sutera halus" },
                { level: 2, title: "Sajadah", icon: "🕌", category: "Level 2", details: [{ label: "Resep", val: "1x Tali Emas + Kain + Kain Wol" }], tip: "Alat ibadah bernilai tinggi" },
                { level: 2, title: "Jaket Detektif", icon: "🧥", category: "Level 2", details: [{ label: "Resep", val: "Kain + Kulit Binatang + 2x Kain Wol" }], tip: "Jaket gaya detektif" },
                { level: 2, title: "Detektor Logam", icon: "📡", category: "Level 2", details: [{ label: "Resep", val: "Sirkuit Elektronik + Magnet + Baterai + Dinamo + Kristal Pelangi" }], tip: "Mencari harta karun tersembunyi" },
                { level: 2, title: "Teropong", icon: "🔭", category: "Level 2", details: [{ label: "Resep", val: "4x Lensa + Bola Karet + Gir Mesin" }], tip: "Alat melihat jarak jauh" },
                { level: 2, title: "Arloji Mahal", icon: "⌚", category: "Level 2", details: [{ label: "Resep", val: "Arloji Kulit + Gir Mesin + Emas Batangan" }], tip: "Jam tangan mewah berkelas" },
                { level: 2, title: "Jas Sutra", icon: "🤵", category: "Level 2", details: [{ label: "Resep", val: "Selendang Sutera + Tali Emas + Saputangan" }], tip: "Pakaian pesta resmi" }
            ]
        },
        {
            title: "Tungku Pelebur",
            icon: "🔥",
            desc: "Peleburan briket, batangan logam, pipa, ubin, dan kaca Level 1 & 2",
            items: [
                // LEVEL 1
                { level: 1, title: "Briket Arang", icon: "⬛", category: "Level 1", details: [{ label: "Resep A", val: "2x Serpihan Serat + 1x Getah Pohon (2x Briket)" }, { label: "Resep B", val: "Kayu Gelondong (3x Briket)" }], tip: "Bahan bakar tungku pelebur" },
                { level: 1, title: "Plat Baja", icon: "🛡️", category: "Level 1", details: [{ label: "Resep", val: "Batangan Logam + Briket Arang" }], tip: "Bahan konstruksi mesin" },
                { level: 1, title: "Pot Kecil", icon: "🏺", category: "Level 1", details: [{ label: "Resep", val: "Tanah Liat + Briket Arang" }], tip: "Pot tanaman kecil" },
                { level: 1, title: "Pot Besar", icon: "🏺", category: "Level 1", details: [{ label: "Resep", val: "2x Tanah Liat + Briket Arang" }], tip: "Pot tanaman kebun besar" },
                { level: 1, title: "Batangan Logam", icon: "🪙", category: "Level 1", details: [{ label: "Resep A", val: "3x Serpihan Logam + 2x Briket Arang" }, { label: "Resep B", val: "Besi Tua + 2x Briket Arang" }], tip: "Logam murni tempa" },
                { level: 1, title: "Kaca", icon: "🪟", category: "Level 1", details: [{ label: "Resep A", val: "2x Sampah Kaca + Briket Arang" }, { label: "Resep B", val: "2x Pasir + 2x Briket Arang" }], tip: "Bahan botol dan lensa" },
                { level: 1, title: "Pipa Logam", icon: "🧪", category: "Level 1", details: [{ label: "Resep", val: "Plat Baja + Kawat" }], tip: "Pipa saluran air & mesin" },
                { level: 1, title: "Tali Emas", icon: "🎗️", category: "Level 1", details: [{ label: "Resep", val: "2x Plat Baja + Kawat + Kaleng Cat + Tali Tambang" }], tip: "Ornamen pakaian mewah" },
                { level: 1, title: "Keran Air", icon: "🚰", category: "Level 1", details: [{ label: "Resep", val: "Besi Tua + Mur dan Baut + Pipa Logam" }], tip: "Fasilitas pipa air" },
                { level: 1, title: "Gabus", icon: "🪵", category: "Level 1", details: [{ label: "Resep", val: "Ikan Gabus + Briket Arang" }], tip: "Hasil: 2x Tutup Gabus" },
                { level: 1, title: "Golok", icon: "🗡️", category: "Level 1", details: [{ label: "Resep", val: "Batangan Logam + Briket Arang + Kayu Gelondong" }], tip: "Alat tebas serbaguna" },
                
                // LEVEL 2
                { level: 2, title: "Genteng", icon: "🏠", category: "Level 2", details: [{ label: "Resep", val: "Tanah Liat + Sak Semen + Briket Arang" }], tip: "Material atap bangunan" },
                { level: 2, title: "Ubin", icon: "🧱", category: "Level 2", details: [{ label: "Resep", val: "Tanah Liat + Kaca + 2x Briket Arang" }], tip: "Lantai keramik rumah" },
                { level: 2, title: "Toples Kaca", icon: "🫙", category: "Level 2", details: [{ label: "Resep", val: "Kaca + Bambu + Kawat" }], tip: "Wadah penyimpanan ikan/benda" },
                { level: 2, title: "Rantang", icon: "🍱", category: "Level 2", details: [{ label: "Resep", val: "Plat Baja + Daun Pisang + Kawat" }], tip: "Wadah bekal makanan" },
                { level: 2, title: "Kemenyan", icon: "🕯️", category: "Level 2", details: [{ label: "Resep", val: "Briket Arang + Serpihan Serat + Kayu Manis + Getah Daun" }], tip: "Aroma dupa tradisional" },
                { level: 2, title: "Lampu Minyak", icon: "🪔", category: "Level 2", details: [{ label: "Resep", val: "Plat Baja + Pipa Logam + Batok Kelapa + Kaca" }], tip: "Penerangan tradisional" },
                { level: 2, title: "Gamelan", icon: "🪘", category: "Level 2", details: [{ label: "Resep", val: "Batangan Logam + 2x Kayu Gelondong + Kristal Pelangi" }], tip: "Alat musik kesenian daerah" },
                { level: 2, title: "Batu Bulan", icon: "🔮", category: "Level 2", details: [{ label: "Resep", val: "Batu + Kerikil Warna-Warni + Kristal Pelangi" }], tip: "Batu mistis langka" },
                { level: 2, title: "Lensa", icon: "🔍", category: "Level 2", details: [{ label: "Resep", val: "Kaca + Kawat + Kerikil Warna-Warni" }], tip: "Komponen kacamata & teropong" },
                { level: 2, title: "Beliung", icon: "🪓", category: "Level 2", details: [{ label: "Resep", val: "2x Pipa Logam + Ikan Ekor Pedang + Paku + Kawat" }], tip: "Kapak beliung kuat" }
            ]
        },
        {
            title: "List Sampah",
            icon: "🗑️",
            desc: "Daftar pembagian sampah hasil memulung untuk bahan baku daur ulang",
            items: [
                {
                    title: "Sampah Kayu / Kain / Kertas",
                    icon: "📦",
                    category: "Organik & Serat",
                    details: [
                        { label: "Jenis Sampah 1", val: "Sapu, Keranjang, Kipas, Topi" },
                        { label: "Jenis Sampah 2", val: "Baju Sobek, Celana Sobek" },
                        { label: "Jenis Sampah 3", val: "Kertas Sobek, Koran Bekas" },
                        { label: "Jenis Sampah 4", val: "Ranting Daun, Kayu Kering" }
                    ],
                    tip: "Dapat didaur ulang menjadi Serpihan Serat di Meja Produksi."
                },
                {
                    title: "Sampah Logam",
                    icon: "🥫",
                    category: "Metal & Besi",
                    details: [
                        { label: "Jenis Sampah 1", val: "Kaleng Berkarat, Garpu, Langseng" },
                        { label: "Jenis Sampah 2", val: "Paku, Jam Weker, Teko" },
                        { label: "Jenis Sampah 3", val: "Sendok, Sendok Bengkok, Colokan" }
                    ],
                    tip: "Dapat didaur ulang menjadi Serpihan Logam di Meja Produksi."
                },
                {
                    title: "Sampah Kaca",
                    icon: "🍾",
                    category: "Kaca & Beling",
                    details: [
                        { label: "Jenis Sampah 1", val: "Botol Beling" },
                        { label: "Jenis Sampah 2", val: "Botol Saus" },
                        { label: "Jenis Sampah 3", val: "Kacamata" }
                    ],
                    tip: "Dapat dilebur menjadi Kaca di Tungku Pelebur."
                }
            ]
        }
    ],

    // ----------------------------------------------------------------------
    // 2. PEMANCINGAN
    // ----------------------------------------------------------------------
    fishing: [
        {
            title: "Ikan Pemancingan",
            icon: "🎣",
            desc: "Daftar ikan, waktu muncul, tingkat Luck, serta harta karun di seluruh area",
            items: [
                {
                    title: "Sungai (Area 1)",
                    icon: "🌊",
                    category: "Area 1",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Tutut (Pagi/Malam/Tengah Malam), Ikan Tawas, Ikan Mas, Ikan Nila (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Gurame, Ikan Patin, Ikan Pari (Semua Waktu), Ikan Belida (Siang/Sore), Ikan Piranha (Sore/Malam/Tengah Malam)" },
                        { label: "Luck 3 (Ikan)", val: "Lobster (Pagi)" },
                        { label: "Luck 4 (Ikan)", val: "Angelfish (Siang)" },
                        { label: "Harta Karun", val: "Luck 1: Ranting Daun, Kayu Kering, Benih Random | Luck 2: Kayu Gelondong | Luck 4: Gelas Emas" }
                    ],
                    tip: "Cocok untuk melatih mini-game mancing di awal game."
                },
                {
                    title: "Selokan (Area 2)",
                    icon: "🪠",
                    category: "Area 2",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Ikan Gupi, Yuyu, Ikan Gabus (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Ikan Sapu-sapu (Semua Waktu)" },
                        { label: "Luck 2 (Ikan)", val: "Ikan Ayam-ayam (Siang), Ikan Discus (Malam, Tengah Malam)" },
                        { label: "Luck 4 (Ikan)", val: "Ikan Blackghost (Tengah Malam)" },
                        { label: "Harta Karun", val: "Luck 1: Serpihan Logam, Benih Random | Luck 2: Besi Tua | Luck 4: Guci Kuno" }
                    ],
                    tip: "Ikan Blackghost bernilai tinggi dan hanya muncul di tengah malam."
                },
                {
                    title: "Empang (Area 3)",
                    icon: "🪵",
                    category: "Area 3",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Ikan Lele, Ikan Wader, Ikan Sepat (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Siput, Ikan Betok (Semua Waktu), Kijing (Sore, Malam, Tengah Malam)" },
                        { label: "Luck 2 (Ikan)", val: "Belut (Semua Waktu), Ikan Bala-bala (Pagi/Sore), Ikan Zebra (Pagi)" },
                        { label: "Harta Karun", val: "Luck 1: Tanah Liat, Benih Random | Luck 3: Pot Kecil, Pot Kecil Retak, Pot Besar, Pot Besar Retak | Luck 4: Kalung Mutiara" }
                    ],
                    tip: "Sumber bahan baku tanah liat dan pot gerabah."
                },
                {
                    title: "Kolam (Area 4)",
                    icon: "🏞️",
                    category: "Area 4",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Ikan Mujair, Ikan Cupang (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Kura-kura, Ikan Arwana, Ikan Koi (Semua Waktu), Ikan Mas Koki (Malam/Tengah Malam), Ikan Pelangi (Pagi/Sore)" },
                        { label: "Luck 2 (Ikan)", val: "Ikan Louhan (Pagi)" },
                        { label: "Luck 3 (Ikan)", val: "Keong Mas (Sore)" },
                        { label: "Harta Karun", val: "Luck 0: Batu, Benih Random | Luck 2: Besi Tua, Kayu Gelondong | Luck 4: Piring Kuno" }
                    ],
                    tip: "Banyak ikan hias bernilai jual tinggi."
                },
                {
                    title: "Danau (Area 6)",
                    icon: "⛵",
                    category: "Area 6",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Kecebong, Ikan Bilis, Kodok (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Ikan Pemanah (Semua Waktu), Ikan Ekor Pedang (Siang)" },
                        { label: "Luck 2 (Ikan)", val: "Ikan Sebelah (Semua Waktu), Ikan Spatula (Sore)" },
                        { label: "Luck 3 (Ikan)", val: "Ikan Barakuda (Semua Waktu), Sturgeon (Malam)" },
                        { label: "Luck 4 (Ikan)", val: "Ikan Bull Head (Pagi), Ikan Ghostfish (Tengah Malam)" },
                        { label: "Harta Karun", val: "Luck 1: Pasir, Karet Gelang, Benih Random | Luck 2: Bambu | Luck 4: Bros Mewah" }
                    ],
                    tip: "Tarikannya sangat agresif, persiapkan stamina yang cukup!"
                },
                {
                    title: "Bojong Lima (Rumah Ortu MC)",
                    icon: "🏡",
                    category: "Rumah MC",
                    details: [
                        { label: "Luck 0 (Ikan)", val: "Udang Sungai, Kumbang Air (Semua Waktu)" },
                        { label: "Luck 1 (Ikan)", val: "Ikan Dori (Semua Waktu)" },
                        { label: "Luck 2 (Ikan)", val: "Ikan Kuwe, Ikan Harimau (Semua Waktu)" },
                        { label: "Luck 3 (Ikan)", val: "Salamander (Semua Waktu)" },
                        { label: "Luck 4 (Ikan)", val: "Ikan Naga (Semua Waktu)" },
                        { label: "Harta Karun", val: "Luck 0: Kayu Kering, Ranting | Luck 1: Eceng Gondok, Batu | Luck 2: Batok Kelapa | Luck 3: Kayu Manis, Rotan | Luck 4: Kain Jarik, Kristal Pelangi" }
                    ],
                    tip: "Tempat memancing Ikan Naga legendaris dan Kristal Pelangi."
                }
            ]
        }
    ],

    // ----------------------------------------------------------------------
    // 3. PANDUAN HADIAH
    // ----------------------------------------------------------------------
    gifting: [
        {
            title: "Warga Biasa",
            icon: "👥",
            desc: "Daftar barang spesial dan favorit untuk warga kampung Citampi",
            items: [
                {
                    title: "Atep Lexmana",
                    icon: "🧢",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Sepatu, Topi, Parcel Hadiah Istimewa, Buku Komik, Jam Tangan" },
                        { label: "Favorit", val: "T-Bone Steak, Grilled Salmon, Sirloin Steak, Kamus, Jamur Goreng Crispy" }
                    ],
                    tip: "Suka barang-barang gaya dan makanan olahan steak."
                },
                {
                    title: "Pak Soleh Abidin",
                    icon: "🧢",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Grilled Salmon, Ikan Patin, Parcel Hadiah Istimewa" },
                        { label: "Favorit", val: "Gorengan, Belut, Teka Teki Silang, Chicken Nugget" }
                    ],
                    tip: "Suka barang-barang gaya dan makanan olahan steak."
                },
                {
                    title: "Arpat Firman",
                    icon: "👞",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, CD, Sepatu Kulit, Buku Komik, Parcel Hadiah, Parcel Hadiah Istimewa" },
                        { label: "Favorit", val: "Sepatu, Grilled Salmon, Sirloin Steak, T-Bone Steak, Headphone, Radio, Art Book, Mi Telor" }
                    ],
                    tip: "Penggemar musik, barang elektronik, dan buku seni."
                },
                {
                    title: "Bang Tigor S.",
                    icon: "💪",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Sepatu, Jamu Herbal" },
                        { label: "Favorit", val: "Bunga, Parfum, Boneka, Majalah Cewek, Sirloin Steak, Teko Bayam, Gado-gado" }
                    ],
                    tip: "Sangat suka jamu herbal penambah stamina."
                },
                {
                    title: "Bu Noer Rohmah",
                    icon: "👵",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Novel, Parcel Hadiah" },
                        { label: "Favorit", val: "Kopi, Parfum, Kalung, Kosmetik, Seblak, Kamus, Ikan Belida, Jam Weker, Notebook, Pensil" }
                    ],
                    tip: "Menyukai novel dan barang kebutuhan wanita."
                },
                {
                    title: "Bu Tuti Mutia",
                    icon: "👩",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Parfum, Kalung, Kosmetik, Art Book, Parcel Hadiah" },
                        { label: "Favorit", val: "Bunga, Jam Tangan, Majalah Cewek, Sirloin Steak, T-Bone Steak, Patung Kuno, Langseng, Cangkir, Sisir, Setrika" }
                    ],
                    tip: "Suka peralatan rumah tangga dan kosmetik."
                },
                {
                    title: "Dokter Dimas",
                    icon: "👨‍⚕️",
                    category: "Kesehatan",
                    details: [
                        { label: "Spesial", val: "Sepatu, Jam Weker, Parcel Hadiah" },
                        { label: "Favorit", val: "Teka Teki Silang, Kamus, Brokoli, Bayam, Tomat, Kol, Kailan, Terong, Semangka, Melon, Jeruk, Nangka, Novel, Art Book" }
                    ],
                    tip: "Sangat menyukai sayuran segar dan teka-teki silang."
                },
                {
                    title: "Mbah Djoko Seno",
                    icon: "👴",
                    category: "Sesepuh",
                    details: [
                        { label: "Spesial", val: "Parfum, Jam Tangan, Kalung, Kosmetik, Sepatu, Patung Kuno, Radio" },
                        { label: "Favorit", val: "Bunga, Boneka, Bandana, Majalah Cewek, Grilled Salmon, Sirloin Steak, T-Bone Steak, Ikan Arwana, Ikan Koi, Sepatu Kulit, Kaleng Cat, Bakso" }
                    ],
                    tip: "Penggemar benda antik dan ikan hias berkelas."
                },
                {
                    title: "Kak Seno Suryo",
                    icon: "👓",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Sepatu, Ikan Gabus, Sepatu Kulit" },
                        { label: "Favorit", val: "Teka Teki Silang, Kamus, Arloji Kulit, Kacamata, Kipas Angin, Radio, Notebook, Pensil, Art Book" }
                    ],
                    tip: "Menyukai perlengkapan belajar, buku, dan aksesoris kulit."
                },
                {
                    title: "Lina Lesmana (Murid SD)",
                    icon: "👧",
                    category: "Anak-anak",
                    details: [
                        { label: "Spesial", val: "Boneka, Kalung, Surprise Egg" },
                        { label: "Favorit", val: "Bunga, Jam Tangan, Gorengan, Cilok, Seblak, Tahu Bulat, Sepatu, Kamus, Grilled Salmon, Burger, Buku Komik" }
                    ],
                    tip: "Suka camilan jajanan pasar dan mainan boneka."
                },
                {
                    title: "Mpok Lela",
                    icon: "🧕",
                    category: "Warga",
                    details: [
                        { label: "Spesial", val: "Parfum, Kalung, Kosmetik" },
                        { label: "Favorit", val: "Bunga, Jam Tangan, Grilled Salmon, Kipas Angin, Lampu Hias, Langseng, Setrika, Jarum" }
                    ],
                    tip: "Suka perkakas dapur dan perhiasan."
                },
                {
                    title: "PNS Ian Nopandi",
                    icon: "👔",
                    category: "Kantor",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Sepatu" },
                        { label: "Favorit", val: "Teka Teki Silang, Kamus, Grilled Salmon, Sirloin Steak, T-Bone Steak, Buku Komik, Ayam Crispy, Teko" }
                    ],
                    tip: "Bagus diberi teka-teki silang dan sepatu kerja."
                },
                {
                    title: "Pak Tatang Suratang",
                    icon: "🧔",
                    category: "Pedagang",
                    details: [
                        { label: "Spesial", val: "Sepatu, Grilled Salmon, Sirloin Steak, T-Bone Steak, Patung Kuno, Sepatu Kulit" },
                        { label: "Favorit", val: "Gorengan, Cilok, Seblak, Arloji Kulit, Setrika, Topi, Jam Weker, Kaleng Cat, Chicken Nugget, Buku Komik" }
                    ],
                    tip: "Memberi diskon belanja jika hubungan pertemanan semakin tinggi."
                },
                {
                    title: "Rara Anindra (Anak SD)",
                    icon: "🎒",
                    category: "Anak-anak",
                    details: [
                        { label: "Spesial", val: "Boneka, Kalung, Surprise Egg, Coklat Dubai, Ladudu" },
                        { label: "Favorit", val: "Bunga, Jam Tangan, Bandana, Gorengan, Cilok, Seblak, Tahu Bulat, Sepatu, Kamus, Sirloin Steak, Chicken Nugget, Buku Komik" }
                    ],
                    tip: "Penggemar Coklat Dubai dan mainan kekinian."
                },
                {
                    title: "Shelli Nurahman (Anak SD)",
                    icon: "🎀",
                    category: "Anak-anak",
                    details: [
                        { label: "Spesial", val: "Bunga, Kalung, Surprise Egg, Coklat Dubai, Ladudu" },
                        { label: "Favorit", val: "Bunga, Jam Tangan, Gorengan, Cilok, Seblak, Tahu Bulat, Sepatu, Kamus, T-Bone Steak, Ayam Crispy, Buku Komik" }
                    ],
                    tip: "Suka bunga, boneka kejutan, dan jajanan gurih."
                },
                {
                    title: "Pak Tio Nurcahyo (Satpam)",
                    icon: "👮",
                    category: "Keamanan",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Ikan Belida, Jam Weker" },
                        { label: "Favorit", val: "Kopi, Minuman Energi, Sepatu, CD, Sepatu Kulit, Teko, Buku Komik, Obat Nyamuk Bakar, Mi Telor" }
                    ],
                    tip: "Kopi dan obat nyamuk bakar sangat berguna untuk ronda malam."
                },
                {
                    title: "Ustad Didi",
                    icon: "👳",
                    category: "Tokoh Agama",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Sepatu" },
                        { label: "Favorit", val: "Teka Teki Silang, Kamus, Teko, Bakso" }
                    ],
                    tip: "Menyukai kamus, teka teki silang, dan semangkuk bakso hangat."
                }
            ]
        },
        {
            title: "Cewek Spesial Citampi",
            icon: "💖",
            desc: "Daftar hadiah spesial & favorit untuk para gadis/heroin calon istri",
            items: [
                {
                    title: "Citra Amalia Putri",
                    icon: "🌸",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Parfum, Ikan Patin, Tas Tangan" },
                        { label: "Favorit", val: "Coklat, Majalah Cewek, T-Bone Steak, Ikan Pelangi, Kain, Headphone, Apel, Semangka, Melon, Jeruk, Nangka, Mie Ayam, Buku Komik" }
                    ],
                    tip: "Sangat menyukai buah-buahan manis, musik, dan parfum."
                },
                {
                    title: "Indah Putri Savitri",
                    icon: "💐",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Ikan Patin, Kain" },
                        { label: "Favorit", val: "Bunga, Parfum, Kalung, Kosmetik, Seblak, Sirloin Steak, T-Bone Steak, Ikan Ayam-ayam, Jarum, Brokoli, Bayam, Tomat, Kol, Kailan, Terong" }
                    ],
                    tip: "Penyuka sayuran kebun, seblak pedas, dan barang kosmetik."
                },
                {
                    title: "Isma",
                    icon: "💄",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Parfum, Kosmetik" },
                        { label: "Favorit", val: "Coklat, Bunga, Majalah Cewek, Grilled Salmon, Sirloin Steak, T-Bone Steak, Ikan Pelangi, Keranjang, Langseng, Cangkir, Sisir, Setrika, Penyedap Masakan" }
                    ],
                    tip: "Suka perlengkapan dapur, memasak, dan kosmetik."
                },
                {
                    title: "Jessica Althanissa",
                    icon: "🎀",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Bandana" },
                        { label: "Favorit", val: "Minuman Energi, Coklat, Jam Tangan, Seblak, Sepatu, Ikan Pelangi, Topi, Kaleng Cat, Notebook" }
                    ],
                    tip: "Gadis energik dan tomboy, sangat senang dengan bandana dan sepatu."
                },
                {
                    title: "Milah Sarmilah",
                    icon: "👗",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Kalung, Patung Kuno" },
                        { label: "Favorit", val: "Kosmetik, Cilok, Seblak, Ikan Lele, Ikan Mas, Gurame, Ikan Tawas, Ikan Patin, Tutut, Ikan Nila, Ikan Mujair, Belut, Kacamata, Kipas, Langseng, Radio, Sisir, Nangka, Bakso" }
                    ],
                    tip: "Penggemar aneka macam ikan tawar dan jajanan cilok/seblak."
                },
                {
                    title: "Nabila Resyaliani",
                    icon: "🧕",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Kalung, Ikan Sapu-sapu" },
                        { label: "Favorit", val: "Coklat, Bunga, Boneka, Grilled Salmon, Sirloin Steak, T-Bone Steak, Sisir, Ikan Pelangi, Setrika, Notebook, Novel" }
                    ],
                    tip: "Gadis santun religius. Menyukai novel, boneka, dan jam tangan."
                },
                {
                    title: "Annissa Lavika",
                    icon: "🍨",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Coklat, Ikan Pelangi" },
                        { label: "Favorit", val: "Es Krim, Kalung, Cilok, Tahu Bulat, Patung Kuno, Pensil, Kentang Goreng" }
                    ],
                    tip: "Suka manisnya es krim, coklat, dan kentang goreng."
                },
                {
                    title: "Carissa Rianty (Rin)",
                    icon: "🍜",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Patung Kuno" },
                        { label: "Favorit", val: "Mie Instan, Snack, Gorengan, Cilok, Seblak, Tahu Bulat, Kipas, Langseng, Penyedap Masakan, Nangka, Bakso, Mie Ayam" }
                    ],
                    tip: "Paling menyukai aneka jajanan street food, bakso, dan mie ayam."
                },
                {
                    title: "Sarah Angelia",
                    icon: "👩‍💼",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Kalung, Kosmetik, Ikan Ayam-ayam, Parcel Hadiah" },
                        { label: "Favorit", val: "Coklat, Bunga, Majalah Cewek, Grilled Salmon, Sirloin Steak, T-Bone Steak, Ikan Pelangi, Keranjang, Sisir, Kain, Kentang Goreng, Art Book" }
                    ],
                    tip: "Kasir ramah yang menyukai parcel hadiah, kalung, dan buku seni."
                },
                {
                    title: "Tasya Wulandari",
                    icon: "👩‍💼",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Kamus, Cangkir, Novel" },
                        { label: "Favorit", val: "Biskuit Krim, Kopi, Coklat, Boneka, Kalung, Teka Teki Silang, Ikan Pelangi, Keranjang, Sisir, Setrika, Brokoli, Bayam, Tomat, Kol, Koilan, Terong, Art Book" }
                    ],
                    tip: "Kasir ramah yang menyukai parcel hadiah, kalung, dan buku seni."
                },
                {
                    title: "Imas Nurullatifa",
                    icon: "✨",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Parfum, Kalung, Kosmetik, Parcel Hadiah" },
                        { label: "Favorit", val: "Bunga, Boneka, Majalah Cewek, Ikan Pelangi, Sisir, Bakso" }
                    ],
                    tip: "Sangat senang jika dihadiahi kosmetik, parfum wangi, atau parcel."
                },
                {
                    title: "Windy Lestari",
                    icon: "👟",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Jam Tangan, Sepatu" },
                        { label: "Favorit", val: "Boneka, Bandana, Grilled Salmon, Sirloin Steak, T-Bone Steak, Ikan Pelangi, Buku Komik" }
                    ],
                    tip: "Menyukai pakaian kasual, sepatu santai, dan membaca buku komik."
                },
                {
                    title: "Julia Frederica Mangunkarto",
                    icon: "👑",
                    category: "Heroin",
                    details: [
                        { label: "Spesial", val: "Patung Kuno, Parcel Hadiah" },
                        { label: "Favorit", val: "Ikan Arwana, Ikan Pelangi, Apel, Melon, Jeruk, Novel" }
                    ],
                    tip: "Gadis ningrat elegan. Suka patung kuno antik dan ikan arwana."
                }
            ]
        }
    ],

    // ----------------------------------------------------------------------
    // 4. TINGKATKAN SKILL
    // ----------------------------------------------------------------------
    skills: [
        {
            title: "Panduan Latihan Skill",
            icon: "⚡",
            desc: "Metode melatih Kekuatan, Kecerdasan, dan Komunikasi",
            items: [
                {
                    title: "Kekuatan (STR)",
                    icon: "💪",
                    category: "Fisik",
                    details: [
                        { label: "Cara Latihan", val: "Kerja Kuli Angkut, Push-up di Gym Area 4, Mengangkat Barbel" },
                        { label: "Manfaat", val: "Meningkatkan batas maksimal energi harian" },
                        { label: "Pekerjaan", val: "Satpam, Kuli Proyek, Atlet Gym" }
                    ],
                    tip: "Karakter tidak mudah lelah atau pingsan saat lembur."
                },
                {
                    title: "Kecerdasan (INT)",
                    icon: "🧠",
                    category: "Pikiran",
                    details: [
                        { label: "Cara Latihan", val: "Membaca Buku di Meja Belajar, Mengisi TTS, Kursus Komputer" },
                        { label: "Manfaat", val: "Syarat membuka karier kantoran bergaji tinggi" },
                        { label: "Pekerjaan", val: "Staff Admin, Programmer, Manajer" }
                    ],
                    tip: "Rutin beli koran dan TTS dari Nenek di jalan."
                },
                {
                    title: "Komunikasi (CHA)",
                    icon: "🗣️",
                    category: "Sosial",
                    details: [
                        { label: "Cara Latihan", val: "Bicara di Cermin, Rutin menyapa semua warga desa" },
                        { label: "Manfaat", val: "Poin hati saat memberi hadiah bertambah jauh lebih cepat" },
                        { label: "Pekerjaan", val: "Sales Marketing, SPB Mall, Kasir Utama" }
                    ],
                    tip: "Karisma mempermudah lolos wawancara kerja tanpa ditolak."
                }
            ]
        }
    ]
};

// Ambil data dari LocalStorage atau defaultData
let appData = JSON.parse(localStorage.getItem('citampi_full_data')) || defaultData;

// Fungsi Simpan ke LocalStorage
function saveData() {
    localStorage.setItem('citampi_full_data', JSON.stringify(appData));
}

// State Aplikasi
let currentTab = 'crafting';
let activeBubbleIndex = { crafting: null, fishing: null, gifting: null, skills: null };
let currentWorkbenchLevel = "all";
let currentSearch = "";
let isEditMode = false;

// Helper Icon Fallback
function getDefaultIcon(type, categoryKey) {
    if (type === 'bubble') {
        switch (categoryKey) {
            case 'crafting': return '🛠️';
            case 'fishing': return '🎣';
            case 'gifting': return '🎁';
            case 'skills': return '⚡';
            default: return '📁';
        }
    }
    return '📦';
}

// ==========================================================================
// 🫧 RENDER BUBBLE (HUB VIEW)
// ==========================================================================
function renderBubbles(categoryKey) {
    const container = document.getElementById(`${categoryKey}BubbleGrid`);
    if (!container) return;

    const bubbles = appData[categoryKey] || [];

    if (bubbles.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 36px 16px;">
                <p style="font-size: 16px; margin-bottom: 8px;">Belum ada bubble di kategori ini.</p>
                <p style="font-size: 13px;">Aktifkan <b>Mode Edit</b> lalu tekan tombol <b>➕ Tambah Bubble</b>!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = bubbles.map((bubble, index) => {
        const icon = bubble.icon && bubble.icon.trim() !== '' ? bubble.icon : getDefaultIcon('bubble', categoryKey);
        const count = bubble.items ? bubble.items.length : 0;

        const editControls = isEditMode ? `
            <div class="bubble-edit-controls">
                <button onclick="moveBubble('${categoryKey}', ${index}, -1)" title="Pindah Kiri/Atas">⬅</button>
                <button onclick="moveBubble('${categoryKey}', ${index}, 1)" title="Pindah Kanan/Bawah">➡</button>
                <button onclick="openBubbleModal('${categoryKey}', ${index})">✏ Edit</button>
                <button class="btn-del" onclick="deleteBubble('${categoryKey}', ${index})">🗑 Hapus</button>
            </div>
        ` : '';

        return `
            <div class="bubble-card-wrap">
                <button class="hub-bubble-btn" onclick="openBubbleDetail('${categoryKey}', ${index})">
                    <span class="hub-icon">${icon}</span>
                    <span class="hub-title">${bubble.title}</span>
                    <span class="hub-desc">${bubble.desc || ''}</span>
                    <span class="hub-count">${count} Resep / Data ➔</span>
                </button>
                ${editControls}
            </div>
        `;
    }).join('');
}

// ==========================================================================
// 📄 RENDER KARTU / RESEP (DETAIL VIEW)
// ==========================================================================
function renderCards(categoryKey) {
    const container = document.getElementById(`${categoryKey}CardGrid`);
    if (!container) return;

    const bubbleIdx = activeBubbleIndex[categoryKey];
    if (bubbleIdx === null || !appData[categoryKey] || !appData[categoryKey][bubbleIdx]) return;

    const bubble = appData[categoryKey][bubbleIdx];
    let items = (bubble.items || []).map((item, originalIndex) => ({ ...item, originalIndex }));

    // Filter Level jika di Crafting
    if (categoryKey === 'crafting' && currentWorkbenchLevel !== "all") {
        items = items.filter(r => r.level && r.level.toString() === currentWorkbenchLevel);
    }

    // Filter Pencarian
    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        items = items.filter(r => 
            r.title.toLowerCase().includes(q) ||
            (r.category && r.category.toLowerCase().includes(q)) ||
            (r.details && r.details.some(d => d.val.toLowerCase().includes(q) || d.label.toLowerCase().includes(q)))
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 36px 16px;">
                <p style="font-size: 15px; margin-bottom: 6px;">Tidak ada resep atau data yang cocok.</p>
                <p style="font-size: 13px;">Gunakan <b>Mode Edit</b> untuk menambah resep baru ke dalam bubble ini.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(item => {
        const editControls = isEditMode ? `
            <div class="card-edit-controls">
                <button onclick="moveCard('${categoryKey}', ${item.originalIndex}, -1)" title="Pindah ke Atas">⬆</button>
                <button onclick="moveCard('${categoryKey}', ${item.originalIndex}, 1)" title="Pindah ke Bawah">⬇</button>
                <button onclick="openCardModal(${item.originalIndex})">✏ Edit</button>
                <button class="btn-del" onclick="deleteCard('${categoryKey}', ${item.originalIndex})">🗑 Hapus</button>
            </div>
        ` : '';

        const displayIcon = item.icon && item.icon.trim() !== '' ? item.icon : getDefaultIcon('card', categoryKey);

        return `
            <div class="guide-card">
                ${editControls}
                <span class="card-badge">${item.category}</span>
                <h3><span>${displayIcon}</span> ${item.title}</h3>
                <ul>
                    ${(item.details || []).map(d => `<li><strong>${d.label}:</strong> ${d.val}</li>`).join('')}
                </ul>
                ${item.tip ? `<div class="tip-box">💡 <b>Tips:</b> ${item.tip}</div>` : ''}
            </div>
        `;
    }).join('');
}

function renderAll() {
    ['crafting', 'fishing', 'gifting', 'skills'].forEach(key => {
        renderBubbles(key);
        if (activeBubbleIndex[key] !== null) {
            renderCards(key);
        }
    });
}

// ==========================================================================
// 🔄 NAVIGASI BUBBLE -> DETAIL & KEMBALI
// ==========================================================================
window.openBubbleDetail = function(categoryKey, bubbleIndex) {
    activeBubbleIndex[categoryKey] = bubbleIndex;
    const section = document.getElementById(categoryKey);
    const hubView = section.querySelector('.hub-view');
    const detailView = section.querySelector('.detail-view');

    const bubble = appData[categoryKey][bubbleIndex];
    detailView.querySelector('.active-bubble-title').textContent = bubble.title;
    detailView.querySelector('.active-bubble-desc').textContent = bubble.desc || 'Daftar resep dan catatan penting.';

    // Sembunyikan filter level jika bubble crafting bukan Media Pembenihan/Meja/Tungku
    const levelFilters = document.getElementById('craftingLevelFilters');
    if (levelFilters && categoryKey === 'crafting') {
        const hasLevel = bubble.items && bubble.items.some(i => i.level);
        levelFilters.style.display = hasLevel ? 'flex' : 'none';
    }

    hubView.style.display = 'none';
    detailView.style.display = 'block';

    renderCards(categoryKey);
};

window.backToHub = function(categoryKey) {
    activeBubbleIndex[categoryKey] = null;
    const section = document.getElementById(categoryKey);
    section.querySelector('.detail-view').style.display = 'none';
    section.querySelector('.hub-view').style.display = 'block';
    renderBubbles(categoryKey);
};

// ==========================================================================
// ✏️ PENGELOLAAN BUBBLE (TAMBAH, EDIT, PINDAH, HAPUS)
// ==========================================================================
const bubbleModal = document.getElementById('bubbleModal');
const bubbleForm = document.getElementById('bubbleForm');

window.openBubbleModal = function(categoryKey, index = -1) {
    document.getElementById('bubbleCategoryKey').value = categoryKey;
    document.getElementById('bubbleIndex').value = index;

    if (index >= 0) {
        document.getElementById('bubbleModalTitle').textContent = "Edit Bubble";
        const bubble = appData[categoryKey][index];
        document.getElementById('bubbleInputTitle').value = bubble.title;
        document.getElementById('bubbleInputIcon').value = bubble.icon || "";
        document.getElementById('bubbleInputDesc').value = bubble.desc || "";
    } else {
        document.getElementById('bubbleModalTitle').textContent = "Tambah Bubble Baru";
        bubbleForm.reset();
        document.getElementById('bubbleInputIcon').value = "";
    }
    bubbleModal.style.display = 'flex';
};

window.closeBubbleModal = function() {
    if (bubbleModal) bubbleModal.style.display = 'none';
};

bubbleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        const categoryKey = document.getElementById('bubbleCategoryKey').value;
        const index = parseInt(document.getElementById('bubbleIndex').value, 10);

        const title = document.getElementById('bubbleInputTitle').value.trim();
        const iconVal = document.getElementById('bubbleInputIcon').value.trim();
        const icon = iconVal !== '' ? iconVal : getDefaultIcon('bubble', categoryKey);
        const desc = document.getElementById('bubbleInputDesc').value.trim();

        if (index >= 0) {
            appData[categoryKey][index].title = title;
            appData[categoryKey][index].icon = icon;
            appData[categoryKey][index].desc = desc;
        } else {
            appData[categoryKey].push({
                title,
                icon,
                desc,
                items: []
            });
        }

        saveData();
        renderBubbles(categoryKey);
    } catch (err) {
        console.error("Gagal simpan bubble:", err);
    } finally {
        closeBubbleModal();
    }
});

window.moveBubble = function(categoryKey, index, direction) {
    const list = appData[categoryKey];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= list.length) return;

    const temp = list[index];
    list[index] = list[targetIdx];
    list[targetIdx] = temp;

    saveData();
    renderBubbles(categoryKey);
};

window.deleteBubble = function(categoryKey, index) {
    if (!confirm("Hapus bubble ini beserta semua resep di dalamnya?")) return;
    appData[categoryKey].splice(index, 1);
    saveData();
    renderBubbles(categoryKey);
};

// ==========================================================================
// ✏️ PENGELOLAAN KARTU / RESEP (TAMBAH, EDIT, PINDAH, HAPUS)
// ==========================================================================
const cardModal = document.getElementById('cardModal');
const cardForm = document.getElementById('cardForm');
const levelInputGroup = document.getElementById('levelInputGroup');

window.openCardModal = function(index = -1) {
    document.getElementById('cardItemIndex').value = index;
    const categoryKey = currentTab;
    const bubbleIdx = activeBubbleIndex[categoryKey];

    if (categoryKey === 'crafting') {
        levelInputGroup.style.display = 'flex';
    } else {
        levelInputGroup.style.display = 'none';
    }

    if (index >= 0) {
        document.getElementById('cardModalTitle').textContent = "Edit Data Resep";
        const item = appData[categoryKey][bubbleIdx].items[index];
        document.getElementById('inputTitle').value = item.title;
        document.getElementById('inputIcon').value = item.icon || "";
        document.getElementById('inputBadge').value = item.category || "";
        document.getElementById('inputTip').value = item.tip || "";
        if (categoryKey === 'crafting') {
            document.getElementById('inputLevel').value = item.level || 1;
        }
        document.getElementById('inputDetails').value = (item.details || [])
            .map(d => `${d.label} | ${d.val}`)
            .join('\n');
    } else {
        document.getElementById('cardModalTitle').textContent = "Tambah Resep Baru";
        cardForm.reset();
        document.getElementById('inputIcon').value = "";
    }
    cardModal.style.display = 'flex';
};

window.closeCardModal = function() {
    if (cardModal) cardModal.style.display = 'none';
};

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        const categoryKey = currentTab;
        const bubbleIdx = activeBubbleIndex[categoryKey];
        const index = parseInt(document.getElementById('cardItemIndex').value, 10);

        const title = document.getElementById('inputTitle').value.trim();
        const iconVal = document.getElementById('inputIcon').value.trim();
        const icon = iconVal !== '' ? iconVal : getDefaultIcon('card', categoryKey);

        const category = document.getElementById('inputBadge').value.trim();
        const tip = document.getElementById('inputTip').value.trim();
        const level = parseInt(document.getElementById('inputLevel').value, 10) || 1;

        const rawDetailsText = document.getElementById('inputDetails').value.trim();
        const rawDetails = rawDetailsText ? rawDetailsText.split('\n') : [];
        const details = rawDetails.map((line, i) => {
            const clean = line.trim();
            if (!clean) return null;
            if (clean.includes('|')) {
                const [l, v] = clean.split('|');
                return { label: l.trim(), val: (v || '').trim() };
            }
            return { label: `Resep ${i + 1}`, val: clean };
        }).filter(d => d !== null && d.val !== "");

        const newItem = { title, icon, category, details, tip };
        if (categoryKey === 'crafting') newItem.level = level;

        const itemsList = appData[categoryKey][bubbleIdx].items;
        if (index >= 0) {
            itemsList[index] = newItem;
        } else {
            itemsList.push(newItem);
        }

        saveData();
        renderCards(categoryKey);
        renderBubbles(categoryKey);
    } catch (err) {
        console.error("Gagal simpan kartu:", err);
    } finally {
        closeCardModal();
    }
});

window.moveCard = function(categoryKey, index, direction) {
    const bubbleIdx = activeBubbleIndex[categoryKey];
    const items = appData[categoryKey][bubbleIdx].items;
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= items.length) return;

    const temp = items[index];
    items[index] = items[targetIdx];
    items[targetIdx] = temp;

    saveData();
    renderCards(categoryKey);
};

window.deleteCard = function(categoryKey, index) {
    if (!confirm("Hapus kartu/resep ini?")) return;
    const bubbleIdx = activeBubbleIndex[categoryKey];
    appData[categoryKey][bubbleIdx].items.splice(index, 1);
    saveData();
    renderCards(categoryKey);
    renderBubbles(categoryKey);
};

// Tutup modal bila klik luar
window.addEventListener('click', (e) => {
    if (e.target === bubbleModal) closeBubbleModal();
    if (e.target === cardModal) closeCardModal();
});

// ==========================================================================
// ✏️ TOGGLE MODE EDIT
// ==========================================================================
const editModeToggle = document.getElementById('editModeToggle');

editModeToggle.addEventListener('click', () => {
    isEditMode = !isEditMode;
    const editOnlyElements = document.querySelectorAll('.edit-only');
    if (isEditMode) {
        editModeToggle.classList.add('active-mode');
        editModeToggle.querySelector('.action-text').textContent = 'Mode Edit: ON';
        editOnlyElements.forEach(el => el.style.display = 'block');
    } else {
        editModeToggle.classList.remove('active-mode');
        editModeToggle.querySelector('.action-text').textContent = 'Mode Edit: OFF';
        editOnlyElements.forEach(el => el.style.display = 'none');
    }
    renderAll();
});

// ==========================================================================
// 🧭 NAVIGASI TAB UTAMA & FILTER
// ==========================================================================
const navButtons = document.querySelectorAll('.category-nav .nav-btn');
const tabSections = document.querySelectorAll('.tab-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        tabSections.forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        currentTab = btn.getAttribute('data-tab');
        const targetSection = document.getElementById(currentTab);
        if (targetSection) targetSection.classList.add('active');

        backToHub(currentTab);
    });
});

// Level Filter Crafting
const levelButtons = document.querySelectorAll('.level-btn');
levelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        levelButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentWorkbenchLevel = btn.getAttribute('data-level');
        if (activeBubbleIndex.crafting !== null) {
            renderCards('crafting');
        }
    });
});

// Pencarian Real-time
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim();
        if (activeBubbleIndex[currentTab] !== null) {
            renderCards(currentTab);
        }
    });
}

// ==========================================================================
// 🌓 THEME TOGGLE (GELAP / TERANG)
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeToggleBtn) {
            themeToggleBtn.querySelector('.theme-icon').textContent = '☀️';
            themeToggleBtn.querySelector('.theme-text').textContent = 'Terang';
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggleBtn) {
            themeToggleBtn.querySelector('.theme-icon').textContent = '🌙';
            themeToggleBtn.querySelector('.theme-text').textContent = 'Gelap';
        }
    }
    localStorage.setItem('citampi_theme', theme);
}

const savedTheme = localStorage.getItem('citampi_theme') || 'dark';
applyTheme(savedTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        applyTheme(isLight ? 'dark' : 'light');
    });
}

// Inisialisasi Pertama
document.addEventListener('DOMContentLoaded', () => {
    // Sinkronisasi data awal jika sebelumnya kosong
    if (!localStorage.getItem('citampi_full_data')) {
        saveData();
    }
    renderAll();
});