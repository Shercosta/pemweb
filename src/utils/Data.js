const MASKAPAI = [
  {
    maskapai_id: "RA",
    maskapai_nama: "Rrat Air",
    maskapai_logo: "Rrat Air",
  },
  {
    maskapai_id: "PR",
    maskapai_nama: "Peko Route",
    maskapai_logo: "Peko Route",
  },
];

const BANDARA = [
  {
    bandara_id: "ID",
    bandara_nama: "Indonesia",
  },
  {
    bandara_id: "HR",
    bandara_nama: "Croatia",
  },
];

const JADWAL = [
  {
    jadwal_id: "1",
    bandara_id_keberangkatan: "ID",
    bandara_id_kedatangan: "HR",
    maskapai_id: "RA",
    tanggal: "14",
  },
  {
    jadwal_id: "2",
    bandara_id_keberangkatan: "HR",
    bandara_id_kedatangan: "ID",
    maskapai_id: "PR",
    tanggal: "15",
  },
];

export { MASKAPAI, BANDARA, JADWAL };
