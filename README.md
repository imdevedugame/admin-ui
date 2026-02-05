# UJIAN AKHIR SEMESTER - FINEBANK PROJECT

## Informasi Mahasiswa

**NIM**: [Isi NIM Anda]

**Nama**: MUHAMMAD IVAN RAFSANJANI

**Kelompok**: [Isi Kelompok Anda]

**URL Repository GitHub**: https://github.com/imdevedugame/admin-ui.git

**URL Domain Vercel**: https://admin-ui-pi-woad.vercel.app/

---

## JAWABAN SOAL 1 (10 Poin)

### Komponen UI Berdasarkan Atomic Design

Berikut adalah daftar lengkap komponen UI yang sudah dibuat pada project Finebank berdasarkan konsep Atomic Design untuk setiap halaman:

#### **Pages: SignIn**
- **Layouts**: AuthLayout
- **Fragments**: FormSignIn
- **Elements**: LabeledInput, CheckBox, Button, Logo, AppSnackbar

#### **Pages: SignUp**
- **Layouts**: AuthLayout
- **Fragments**: FormSignUp
- **Elements**: LabeledInput, Button, Logo, AppSnackbar

#### **Pages: Dashboard**
- **Layouts**: MainLayout
- **Fragments**: CardBalance, CardGoal, CardStatistic, CardExpenseBreakdown, CardUpcomingBill, RecentTransaction
- **Elements**: Card, Icon, BarsDataset, Button, AppSnackbar, CircularProgress


#### **Pages: Expense**
- **Layouts**: MainLayout
- **Fragments**: CardExpense
- **Elements**: Card, Icon, AppSnackbar, CircularProgress

---

## SOAL 2 - Validasi Form Register dengan Formik

✅ **Status**: Selesai

**Fitur yang diimplementasikan**:
- Validasi form menggunakan Formik dan Yup
- Field validasi: Name (min 3 karakter), Email (format email valid), Password (min 6 karakter)
- Tombol berubah menjadi "Loading..." saat submit
- Integrasi dengan API endpoint: `https://jwt-auth-eight-neon.vercel.app/register`
- Notifikasi error/success menggunakan Snackbar Material UI

---

## SOAL 3 - Halaman Expenses dengan API Integration

✅ **Status**: Selesai

**Fitur yang diimplementasikan**:
- Halaman Expenses dengan route `/expense`
- Fetch data dari API endpoint: `https://jwt-auth-eight-neon.vercel.app/expenses`
- Loader (CircularProgress) saat menunggu data
- Tampilan card expense dengan:
  - Icon kategori (Housing, Food, Transportation, Entertainment, Shopping, Others)
  - Total amount per kategori
  - Percentage dengan trend indicator (up/down)
  - Detail items dalam setiap kategori
  - Compare to last month

---

## SOAL 4 - Backdrop dengan CircularProgress saat Logout

✅ **Status**: Selesai

**Fitur yang diimplementasikan**:
- Component Backdrop dari Material UI
- CircularProgress di dalam Backdrop
- Ditampilkan saat user klik menu logout
- Loading indicator dengan text "Logging Out..."
- Menunggu hingga proses logout selesai

---

## Teknologi yang Digunakan

- **React 19** + **TypeScript**
- **Vite** (Build tool)
- **React Router DOM** (Routing)
- **TailwindCSS** (Styling)
- **Material UI** (Component library)
- **Formik + Yup** (Form validation)
- **Axios** (HTTP client)
- **JWT Decode** (Token parsing)

---

## Cara Menjalankan Project

1. Clone repository:
   ```bash
   git clone https://github.com/imdevedugame/admin-ui.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka browser di: `http://localhost:5173`

---

## Catatan

Project ini telah di-deploy ke Vercel dan dapat diakses melalui:
https://admin-ui-pi-woad.vercel.app/

**Akun untuk login**:
- Email: [Email mahasiswa Anda]
- Password: [Password Anda]

---

**Tanggal Pengumpulan**: 15 Januari 2026
**Dibuat oleh**: MUHAMMAD IVAN RAFSANJANI
