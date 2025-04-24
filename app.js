const SUPABASE_URL = 'https://ddxiwbkwihqpliovblzq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkeGl3Ymt3aWhxcGxpb3ZibHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MDA2OTksImV4cCI6MjA2MTA3NjY5OX0.Sm3M8d4Bft-XAOXjxpNykTgzcdmS2Gzs-tQaA9BEnWM';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById('formBarang').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    tanggal: e.target.tanggal.value,
    no_tlt: e.target.no_tlt.value,
    no_sj: e.target.no_sj.value,
    pengirim: e.target.pengirim.value,
    kode_artikel: e.target.kode_artikel.value,
    ukuran_39: parseInt(e.target.ukuran_39.value) || 0,
    ukuran_40: parseInt(e.target.ukuran_40.value) || 0,
    ukuran_41: parseInt(e.target.ukuran_41.value) || 0,
    ukuran_42: parseInt(e.target.ukuran_42.value) || 0,
    ukuran_43: parseInt(e.target.ukuran_43.value) || 0,
    ukuran_44: parseInt(e.target.ukuran_44.value) || 0,
    ukuran_45: parseInt(e.target.ukuran_45.value) || 0,
    keterangan: e.target.keterangan.value
  };

  const { error } = await supabase.from('datang_barang_table').insert([data]);

  if (error) {
    alert('Gagal menyimpan!');
    console.error(error);
  } else {
    alert('Data berhasil disimpan!');
    e.target.reset();
  }
});
